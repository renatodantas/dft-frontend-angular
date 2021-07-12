import { NavbarService } from './navbar.service';


describe('NavbarService', () => {
  let service: NavbarService;

  beforeEach(() => {
    service = new NavbarService();
  });

  it('deve retornar os itens do Navbar', (done) => {
    service.getItems().subscribe(itens => {
      expect(itens.length).toBe(2);
      done();
    })
  });
});
