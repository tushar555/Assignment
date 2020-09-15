import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { exception } from 'console';

describe('AppComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    });
  });

  //Checked if Component has intiated and app has started.
  it('should create the app', () => {
    let component = TestBed.createComponent(AppComponent);
    let app = component.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
