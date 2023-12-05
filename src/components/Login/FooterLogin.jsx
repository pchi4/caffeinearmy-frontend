export default function FooterLogin() {
  return (
    <>
      <span className="d-none d-sm-block fw-lighter text-center fs-6">
        {' '}
        © 2021 Caffeine Army. CNPJ: 27.403.527/0001-13
      </span>
      <span className="d-none d-sm-block fw-lighter text-center fs-6">
        Endereço: Rua Rubens Guelli, 68, Itaigara, Salvador - BA, 41815-135
      </span>
      <span className="d-none d-sm-block fw-lighter text-center fs-6">
        E-mail: <a href={() => false}>contato@caffeinearmy.com.br</a> |
        Telefone: <a href={() => false}> +55 11 91106-4910</a>.
      </span>
    </>
  );
}
