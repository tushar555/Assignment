import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { exception } from 'console';
import { By } from "@angular/platform-browser";
import { element } from 'protractor';

describe('AppComponent', () => {

  let component: ComponentFixture<AppComponent>;
  let appCompInstance: AppComponent;
  let length: number;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    component = TestBed.createComponent(AppComponent);
    appCompInstance = component.debugElement.componentInstance;
    length = appCompInstance.cardDetails.length;
  });

  //Checked if Component has intiated and app has started.
  it('should create the app', () => {
    expect(appCompInstance).toBeTruthy();
  });

  it('should call addCard function', async () => {

    spyOn(appCompInstance, 'addCard');
    const btnElement = component.debugElement.query(By.css('#addBtn')).nativeElement;
    btnElement.click();
    expect(appCompInstance.addCard).toHaveBeenCalled();
  });

  it('should create card', () => {
    appCompInstance.addCard();
    component.detectChanges();
    let cardClass = component.debugElement.query(By.css('.card')).classes.card;
    expect(cardClass).toBe(true);
  });

  it('should increase cardDetail array length', () => {

    appCompInstance.addCard();
    expect(appCompInstance.cardDetails.length).toEqual(length + 1);

  });

  it('should call removeCard function', () => {
    spyOn(appCompInstance, 'removeCard');
    appCompInstance.addCard();
    component.detectChanges();
    const btnElement = component.debugElement.query(By.css('.remove-card')).nativeElement;
    btnElement.click();
    expect(appCompInstance.removeCard).toHaveBeenCalled();
  })




  it('should not added any card at start', () => {

    const btnElement = component.debugElement.query(By.css('.card'));

    expect(btnElement).toBeFalsy();

    appCompInstance.addCard();

  });




});

