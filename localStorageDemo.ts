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

interface Coordinates {
  latitude?: number;
  longitude?: number;
  accuracy?: number;
}

interface Position {
  coords?: Coordinates;
  timeStamp?: number;
}

interface PositionCallback {
  (position: Position): void;
}

interface PositionError {
  errorCode?: number;
  errorMessage?: string;
}

interface PositionErrorCallback {
  (positionError: PositionError): void;
}

interface PositionOptions {
  enableHighAccuracy?: boolean;
  maximumAge?: number;
  timeout?: number;
}

interface IGeoLocation {
  clearWatch(watchId: number): void;
  getCurrentPosition(
    success: PositionCallback,
    error?: PositionErrorCallback | null,
    options?: PositionOptions
  ): void;
  watchPosition(
    success: PositionCallback,
    error?: PositionErrorCallback | null,
    options?: PositionOptions
  ): number;
}

class GeoLocation implements IGeoLocation {
  clearWatch(watchId: number): void {}
  getCurrentPosition(
    success: PositionCallback,
    error?: PositionErrorCallback | null | undefined,
    options?: PositionOptions | undefined
  ): void {
    success((pos) => {
      console.log("Your current position is:");
      if (pos.coords?.latitude) {
        console.log(`Latitude : ${pos.coords?.latitude}`);
      }
      if (pos.coords?.longitude) {
        console.log(`Longitude : ${pos.coords?.longitude}`);
      }
      if (pos.coords?.accuracy) {
        console.log(`More or less ${pos.coords?.accuracy} meters.`);
      }

      pos = {
        coords: {
          accuracy: 100,
          latitude: 35.2505,
          longitude: 33.5505,
        },
        timeStamp: 50000,
      };
    });
  }
  watchPosition(
    success: PositionCallback,
    error?: PositionErrorCallback | null | undefined,
    options?: PositionOptions | undefined
  ): number {
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
