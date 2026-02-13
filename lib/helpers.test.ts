describe('isRateLimited', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  function loadIsRateLimited(rateLimit = 2, rateWindowMs = 1000) {
    let isRateLimited: (ip: string) => boolean = () => false;

    jest.isolateModules(() => {
      jest.doMock('./config', () => ({
        config: {
          rateLimit,
          rateWindowMs,
        },
      }));

      ({ isRateLimited } = require('./helpers'));
    });

    return isRateLimited;
  }

  it('limits requests after exceeding the configured threshold', () => {
    const isRateLimited = loadIsRateLimited(2, 1000);

    expect(isRateLimited('1.2.3.4')).toBe(false);
    expect(isRateLimited('1.2.3.4')).toBe(false);
    expect(isRateLimited('1.2.3.4')).toBe(true);
  });

  it('tracks each IP independently', () => {
    const isRateLimited = loadIsRateLimited(1, 1000);

    expect(isRateLimited('1.1.1.1')).toBe(false);
    expect(isRateLimited('2.2.2.2')).toBe(false);
    expect(isRateLimited('1.1.1.1')).toBe(true);
    expect(isRateLimited('2.2.2.2')).toBe(true);
  });

  it('resets counts after the rate window has elapsed', () => {
    const nowSpy = jest.spyOn(Date, 'now');
    const isRateLimited = loadIsRateLimited(1, 1000);

    nowSpy.mockReturnValue(0);
    expect(isRateLimited('3.3.3.3')).toBe(false);
    expect(isRateLimited('3.3.3.3')).toBe(true);

    nowSpy.mockReturnValue(1001);
    expect(isRateLimited('3.3.3.3')).toBe(false);

    nowSpy.mockRestore();
  });
});
