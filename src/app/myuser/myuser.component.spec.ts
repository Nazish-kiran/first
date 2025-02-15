import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserComponent } from './myuser.component';

describe('MyuserComponent', () => {
  let component: MyuserComponent;
  let fixture: ComponentFixture<MyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
