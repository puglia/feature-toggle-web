import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { Feature } from "../model/feature";
import { FeatureBuilder } from "../utils/feature-builder";
import { FeatureToggleService } from "./feature-toggle.service";

describe('FeatureToggleService', () => {
  let service: FeatureToggleService;
  let httpSpy: { get: jasmine.Spy, post: jasmine.Spy };
  

beforeEach(() => {
  TestBed.configureTestingModule({ providers: [FeatureToggleService] });
})

beforeEach(() => {
  httpSpy = jasmine.createSpyObj('HttpClient', ['get','post']);
  service = new FeatureToggleService(httpSpy as any);
});

it('should find feature', () => {
  let mockedFeature: Feature = new FeatureBuilder().build();

  httpSpy.get.and.returnValue(of(mockedFeature));

  service.find(1).subscribe(
    feature => expect(feature).toEqual(mockedFeature)
  );
  expect(httpSpy.get.calls.count()).toBe(1);
});

it('should list features', () => {
  let mockedFeatures: Feature[] = new FeatureBuilder().list(5);

  httpSpy.get.and.returnValue(of(mockedFeatures));

  service.list(1).subscribe(
    features => expect(features).toEqual(mockedFeatures)
  );
  expect(httpSpy.get.calls.count()).toBe(1);
});

it('should save and return feature', () => {
  let mockedFeature: Feature = new FeatureBuilder().build();

  httpSpy.post.and.returnValue(of(mockedFeature));

  service.save(mockedFeature).subscribe(
    feature => expect(feature).toEqual(mockedFeature)
  );
  expect(httpSpy.post.calls.count()).toBe(1);
});

});