import { ContentLimiterPipe } from './content-limiter.pipe';

describe('ContentLimiterPipe', () => {
  it('create an instance', () => {
    const pipe = new ContentLimiterPipe();
    expect(pipe).toBeTruthy();
  });
});
