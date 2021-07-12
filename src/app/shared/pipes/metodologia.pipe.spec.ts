import { MetodologiaEnum } from "../enums/metodologia.enum";
import { MetodologiaPipe } from "./metodologia.pipe";

describe('MetodologiaPipe', () => {

  it('converte corretamente os labels', () => {
    const pipe = new MetodologiaPipe();
    expect(pipe.transform(MetodologiaEnum.TIPICA)).toEqual('Típica');
    expect(pipe.transform(MetodologiaEnum.ATIPICA)).toEqual('Atípica');
  });
});
