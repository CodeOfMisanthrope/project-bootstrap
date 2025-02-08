import KVStorage from "~core/kv-storage";
import LocalStorage from "~core/kv-storage/engines";

describe('KVStorage', () => {
  // let storage: KVStorage = new KVStorage({engine: new LocalStorage()});

  // beforeEach(() => {
  //   // Используем движок LocalStorage для тестирования
  //   storage = new KVStorage({ engine: new LocalStorage() });
  //   localStorage.clear(); // Очищаем localStorage перед каждым тестом
  // });

  // it('должен устанавливать и получать значение', () => {
  //   storage.set('key1', 'value1');
  //   expect(storage.get('key1')).toBe('value1');
  // });
  //
  // it('должен удалять значение', () => {
  //   storage.set('key1', 'value1');
  //   storage.remove('key1');
  //   expect(storage.get('key1')).toBeNull();
  // });

  test("set", () => {
    const
      storage = new KVStorage({engine: new LocalStorage()});

    storage.set("key", 1);
    const val = storage.get("key");
    console.log(val);
    expect(val).toEqual("1");
  })
});
