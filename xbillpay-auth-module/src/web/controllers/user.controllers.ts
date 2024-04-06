import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from '../services/user.service';
import { RegisterDto } from '../../domain/dto/user.registerDto';
import { LoginDto } from '../../domain/dto/user.loginDto';
import { AuthService } from '../services/auth.service';
import { VerifyOTPDto } from '../../domain/dto/user.verifyOtp';
import { ResendOTPDto } from '../../domain/dto/user.resend';
import { AuthGuard } from '../../guard/auth.guard';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiQuery,
  ApiResponse,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import {
  ApiResponseBuilder,
  ApiResponses,
} from '../../domain/dto/response/code.api.response';
@ApiTags('users')
@Controller('api/v1')
export class UserController {
  private userService: UserService;
  private authService: AuthService;

  constructor(userService: UserService, authService: AuthService) {
    this.userService = userService;
    this.authService = authService;
  }

  @Post('register')
  @ApiOperation({
    summary: 'Create User',
    description: 'Returns a user response',
  })
  @ApiResponse({
    status: 200,
    type: [RegisterDto],
    description: 'Create an agent  users  successfully',
  })
  @UsePipes(new ValidationPipe())

  createUser(@Body() registerDto: RegisterDto): Promise<ApiResponses<String>> {
    return this.userService.createUser(registerDto);
  }

  @Post('login')
  @ApiOperation({
    summary: 'Login User',
    description: 'Returns a user authentication code',
  })
  @ApiResponse({
    status: 200,
    type: [LoginDto],
    description: 'Log in with your details',
  })
  @UsePipes(new ValidationPipe())
  loginUser(@Body() loginDto: LoginDto) {
    return this.authService.signIn(loginDto);
  }

  @Post('verify-otp')
  @ApiOperation({
    summary: 'Verify OTP',
    description: 'Returns a user details',
  })
  @ApiResponse({ status: 200, type: [VerifyOTPDto], description: 'Verify OTP' })
  @UsePipes(new ValidationPipe())
  verifyOTP(@Body() verifyOtp: VerifyOTPDto) {
    return this.userService.verify_otp(verifyOtp);
  }

  @Post('resend-otp')
  @ApiOperation({ summary: 'RESEND OTP', description: 'Returns a user otp' })
  @ApiResponse({ status: 200, type: [ResendOTPDto], description: 'RESEND OTP' })
  @UsePipes(new ValidationPipe())
  resndOTP(@Body() verifyOtp: ResendOTPDto) {
    return this.userService.resendOTP(verifyOtp);
  }

  @Get('agent/:id')
  @UseGuards(AuthGuard)
  @ApiOperation({
    summary: 'et Agent Details',
    description: 'Returns a agent details',
  })
  @ApiBearerAuth()
  @ApiUnauthorizedResponse({ description: 'Unauthorized' })
  @ApiResponse({
    status: 200,
    type: [Number],
    description: 'Get Agent Details',
  })
  getAgents(@Param('id') id: number) {
    return this.authService.getAgent(id);
  }
}
