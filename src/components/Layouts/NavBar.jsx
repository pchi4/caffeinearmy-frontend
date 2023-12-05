import styles from '../Home/HomeStyle.module.css';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  Navbar,
  Container,
  Modal,
  Button,
  Form,
  Row,
  Col
} from 'react-bootstrap';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { usePostRegisterCompany } from './hooks/mutations';
import LoadingComponent from '../loadding/LoaddingComponent';

export default function NavBar() {
  let history = useHistory();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const columns = [
    {
      label: 'CNPJ',
      key: 'cnpj',
      type: 'text',
      placeholder: 'Digite um cnpj'
    },
    {
      label: 'Nome Fantasia',
      key: 'nomeFantasia',
      type: 'text',
      placeholder: 'Digite o nome da Fantasia'
    }
    // {
    //   "label": "Email",
    //   "key": "email",
    //   "type": "email",
    //   "placeholder": "Email da empresa"
    // },
    // {
    //   "label": "Telefone",
    //   "key": "telefone",
    //   "type": "number",
    //   "placeholder": "Telefone da empresa"
    // },
    // {
    //   "label": "Razão Social",
    //   "key": "razaoSocial",
    //   "type": "text",
    //   "placeholder": "Razão social da empresa"
    // },
    // {
    //   "label": "Nome do Lojista",
    //   "key": "nomeLojista",
    //   "type": "text",
    //   "placeholder": "Digite o nome do lojista"
    // },
    // {
    //   "label": "Telefone do Lojista",
    //   "key": "telefoneLojista1",
    //   "type": "number",
    //   "placeholder": "Digite o telefone do lojista"
    // },
    // {
    //   "label": "Telefone do Lojista 2",
    //   "key": "telefoneLojista2",
    //   "type": "number",
    //   "placeholder": "Digite o telefone do lojista"
    // },
    // {
    //   "label": "Email do Lojista",
    //   "key": "emailLojista",
    //   "type": "email",
    //   "placeholder": "Digite o email do lojista"
    // },
  ];

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const { mutate: registerCompany, isLoading } = usePostRegisterCompany();

  const submitForm = async (data) => {
    registerCompany(data);
    setShow(false);
  };

  if (isLoading) {
    return <LoadingComponent />;
  }

  function Logout(e) {
    Swal.fire({
      title: 'Deseja sair?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Sair',
      cancelButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Logout feito com sucesso.',
          icon: 'success'
        });
        logout();
        setTimeout(() => {
          history.push('/');
        }, 2000);
      }
    });
  }

  const navs = [
    {
      href: '/home',
      title: 'Lojas',
      src: '/icone_lojas.svg',
      event: () => history.push('/home')
    },
    {
      href: () => false,
      title: 'Cadastrar',
      src: 'icone_sair.svg',
      event: handleShow
    },
    {
      href: () => false,
      title: 'Sair',
      src: 'icone_sair.svg',
      event: Logout
    }
  ];

  return (
    <Navbar class="navbar">
      <Container>
        <div className={styles.divW}>
          <img
            src="/marca_lojistas.svg"
            alt="icone-marca"
            className={styles.marcaLoja}
          ></img>
        </div>
        <ul class="nav nav-tabs ml-5 mr-5">
          {navs.map((nav, idx) => (
            <li class="nav-item text-center p-1" key={idx}>
              <a
                class="fw-bold text-center text-dark text-decoration-none list-group-item active"
                aria-current="true"
                href={nav.href}
                onClick={nav.event}
              >
                <img class="nav-link" alt="icone" src={nav.src}></img>
              </a>
              <a
                class="fw-bold text-center text-dark d-none d-sm-block text-decoration-none"
                href={nav.href}
                onClick={nav.event}
              >
                <span id="lojas" className={styles.lojas}>
                  {nav.title}
                </span>
              </a>
            </li>
          ))}
        </ul>
        {show && (
          <>
            <Modal show={show} onHide={handleClose} size="xl">
              <Modal.Header closeButton>
                <Modal.Title>Cadastro de Empresa</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form className="container my-5">
                  {columns.map((colum, idx) => (
                    <Form.Group
                      as={Row}
                      key={colum.key}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        {colum.label}
                      </Form.Label>
                      <Col sm="10">
                        <Form.Control
                          type={colum.type}
                          placeholder={colum.placeholder}
                          {...register(colum.key, {
                            required: 'Este campo é obrigatório'
                          })}
                        />
                        {errors.value && (
                          <p className="text-danger my-1" role="alert">
                            <strong>{errors.value?.message}</strong>
                          </p>
                        )}
                      </Col>
                    </Form.Group>
                  ))}
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancelar
                </Button>
                <Button variant="primary" onClick={handleSubmit(submitForm)}>
                  Cadastrar
                </Button>
              </Modal.Footer>
            </Modal>
          </>
        )}
      </Container>
    </Navbar>
  );
}
