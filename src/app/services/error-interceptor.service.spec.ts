import { TestBed } from "@angular/core/testing";
import { ErrorInterceptorService } from "./error-interceptor.service";

describe("ErrorInterceptorServiceService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: ErrorInterceptorService = TestBed.get(
      ErrorInterceptorService
    );
    expect(service).toBeTruthy();
  });
});
