import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AuthService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request to login', () => {
    const url = `${environment.apiUrl}/sis_core/sign_in`;
    const data = {email: 'application_owner@local.com', password: 'application@123'};
    const response = { success: true, jwt: 'token' };

    service.login(data).subscribe(res => {
      expect(res).toEqual(response);
    });

    const testReq = httpMock.expectOne(url);
    expect(testReq.request.method).toBe('POST');
    testReq.flush(response);
    httpMock.verify();
  });

});
