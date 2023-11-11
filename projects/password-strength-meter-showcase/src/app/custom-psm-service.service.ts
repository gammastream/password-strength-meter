import { Injectable } from '@angular/core';
import {
  FeedbackResult,
  IPasswordStrengthMeterService,
} from 'angular-password-strength-meter';

@Injectable()
export class CustomPsmServiceService extends IPasswordStrengthMeterService {
  score(password: string): number {
    console.log('Password', password);
    return this.randomNumber(0, 4);
  }

  scoreWithFeedback(password: string): FeedbackResult {
    console.log('CustomPsmServiceService', password);

    return {
      score: this.randomNumber(0, 4),
      feedback: { warning: '', suggestions: [] },
    };
  }

  scoreAsync(password: string): Promise<number> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.score(password));
      }, 1000);
    });
  }

  scoreWithFeedbackAsync(password: string): Promise<FeedbackResult> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.scoreWithFeedback(password));
      }, 1000);
    });
  }

  private randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
