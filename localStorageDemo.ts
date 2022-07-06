// abstract class MyStorageAb<T> {
//   [key: string]: T;
// }

interface MyStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: MyStorage<T> = {};
  setItem(key: string, value: T) {
    this.storage[key] = value;
  }
  getItem(key: string): T {
    return this.storage[key];
  }
  removeItem(key: string) {
    delete this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const myLocalStorage = new LocalStorage();
myLocalStorage.setItem("ItemKey1", "I'm String");
myLocalStorage.setItem("ItemKey1", true);
myLocalStorage.setItem("ItemKey2", 3);

console.log(myLocalStorage.getItem("ItemKey1"));

myLocalStorage.removeItem("ItemKey2");
console.log(myLocalStorage.getItem("ItemKey2"));

myLocalStorage.clear();
console.log(myLocalStorage.getItem("ItemKey1"));

interface IPosition {
  coords: {
    latitude?: number;
    longitude?: number;
    accuracy?: number;
  };
  timeStamp?: string;
}

interface IError {
  errorCode: string;
  errorMessage: string;
}

interface MyGeoLocationOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

type GeoLocationParam = {
  (
    successFn: (pos: IPosition) => IPosition,
    errorFn?: (err: IError) => IError,
    optional?: (option: MyGeoLocationOptions) => void
  ): void;
};

interface IGeoLocation {
  getCurrentPosition(param: GeoLocationParam): void;
  watchCurrentPosition(param: GeoLocationParam): void;
  clearWatch(id: string): void;
}

class GeoLocation implements IGeoLocation {
  getCurrentPosition(fn: GeoLocationParam): void {
    return {};
  }
  watchCurrentPosition(fn: GeoLocationParam): void {
    throw new Error("Method not implemented.");
  }
  clearWatch(id: string): void {
    throw new Error("Method not implemented.");
  }
}

const success = ({ coords }, timestamp: IPosition) => {
  console.log(`Latitude: ${coords.latitude}, Longitude: ${coords.longitude}`);
  console.log(`Time is ${timestamp}`);
};

const error = ({ errorCode, errorMessage }: IError) => {
  console.warn(`ERROR(${errorCode}): ${errorMessage}`);
};

const options: MyGeoLocationOptions = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};
