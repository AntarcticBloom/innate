import sanitize from 'sanitize-html'
import { GraphQLError } from 'graphql'
import jwt, { JwtPayload } from 'jsonwebtoken'

export abstract class InputValidator {
  public static validateDisplayName(
    displayName: string,
    request: Request,
  ): true | never {
    this.refuseUnsanitary(displayName, 'USERNAME', request)

    if (!displayName) {
      throw new GraphQLError(`Display name must not be empty`)
    }

    if (displayName.length < 2) {
      throw new GraphQLError(
        `Display name must be at least 2 characters; received "${displayName}"`,
      )
    }

    if (
      !displayName.match(
        /^(?=.{2,20}$)(?![_.\s\-])(?!.*[_.\s\-]{2})[a-zA-Z0-9._\s\-]+(?<![_.\s\-])$/,
      )
    ) {
      throw new GraphQLError(
        `Display name must be alphanumeric. Periods and underscores may only be used as separators. Received "${displayName}"`,
      )
    }

    return true
  }

  public static validateEmail(email: string, request: Request): true | never {
    this.refuseUnsanitary(email, 'EMAIL', request)

    if (!email) {
      throw new GraphQLError('Email address is required')
    }

    if (
      !email.match(
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
      )
    ) {
      throw new GraphQLError(
        `Email address format invalid: received "${email}"`,
      )
    }

    return true
  }

  public static validatePassword(
    password: string,
    request: Request,
  ): true | never {
    this.refuseUnsanitary(password, 'PASSWORD', request)

    if (!password) {
      throw new GraphQLError('Password is required')
    }

    if (password.length < 8) {
      throw new GraphQLError(
        `Password must be at least 8 characters in length; received ${password.length} characters`,
      )
    }

    return true
  }

  public static verifyJWT(token: string, request: Request): JwtPayload | never {
    this.refuseUnsanitary(token, 'TOKEN', request)

    try {
      return jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload
    } catch (error) {
      this.handleJWTError(error, token)
    }
  }

  private static handleJWTError(error: any, token: string): never {
    if (error.message === 'invalid token') throw new GraphQLError('JWT invalid')

    if (error.message === 'jwt malformed')
      throw new GraphQLError('JWT malformed')

    if (error.message === 'jwt must be provided')
      throw new GraphQLError(`JWT was not provided; received empty string`)

    if (error.message === 'jwt expired')
      throw new GraphQLError(
        'Token expired. Please send yourself another confirmation email and try again.',
      )

    if (error.message === 'invalid signature')
      throw new GraphQLError('JWT signature invalid')

    throw new GraphQLError('An unknown error occurred')
  }

  private static refuseUnsanitary(
    original: string,
    fieldName: string,
    request: Request,
  ): never | void {
    if (
      sanitize(original, {
        allowedTags: [],
        allowedAttributes: {},
      }) !== original
    ) {
      console.group(`------------- Unsanitary input -------------`)
      console.group(`Value: "${original}`)
      console.group(`Field: ${fieldName}`)
      console.group(`IP Address: ${request.socket.remoteAddress}`)
      console.group(`Query: ${(request.body as any).query}`)
      console.group(`Variables: ${(request.body as any).variables}`)
      console.group('--------------------------------------------')
      console.groupEnd()

      throw new GraphQLError(`Invalid input. Received: "${original}"`)
    }
  }
}
