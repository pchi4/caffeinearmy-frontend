import { useState } from 'react';
import { FaArrowRight, FaSearch } from 'react-icons/fa';
import { Form, Button, Alert } from 'react-bootstrap';
import styles from '../Home/HomeStyle.module.css';
import { useForm } from 'react-hook-form';
import Company from './Collapse/Company';
import Shopkeeper from './Collapse/Shopkeeper';
import Content from './Content';
import { useGetSearchCompany } from './hooks/queries';
import LoadingComponent from '../loadding/LoaddingComponent';

export default function FormSearchCompany() {
  const [target, setTarget] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [params, setParams] = useState({});

  const {
    data: company,
    isLoading,
    isFetching,
    error
  } = useGetSearchCompany({ cnpj: params.cnpj });

  function noneInput(e) {
    var teste = e.target.value.length;
    setTarget(teste);
  }

  const handleValue = (data) => {
    setParams(data);
  };

  if (isFetching || isLoading) {
    return <LoadingComponent />;
  }

  return (
    <>
      <div className={styles.backMobile}>
        <div class="d-flex justify-content-evenly align-items-center">
          <Form className="w-100">
            {error && <Alert variant="danger">{error?.message}</Alert>}
            <Form.Group className="input-group p-3">
              <Form.Group className="input-group mb-3">
                {target >= 1 ? (
                  <i className={styles.iconNone}></i>
                ) : (
                  <i>
                    <FaSearch className={styles.iconInput} color="#dc3545" />
                  </i>
                )}
                <Form.Control
                  type="number"
                  className="form-control w-75"
                  name="cnpj"
                  placeholder="         Digite um CNPJ"
                  onKeyUp={noneInput}
                  // onFocus={noneInput}
                  {...register('cnpj', {
                    required: 'CNPJ é obrigatório',
                    minLength: {
                      value: 11,
                      message: 'CNPJ inválido'
                    }
                  })}
                  aria-invalid={errors.cnpj ? 'true' : 'false'}
                />
                <Button
                  className="btn btn-secondary d-sm-block d-md-none m-2"
                  onClick={handleSubmit(handleValue)}
                >
                  <FaArrowRight />
                </Button>
                <Button
                  className="btn btn-danger d-none d-md-block d-lg-block m-2"
                  onClick={handleSubmit(handleValue)}
                >
                  Buscar Loja
                </Button>
                {errors.cnpj && (
                  <p className="text-danger my-3" role="alert">
                    <strong>{errors.cnpj?.message}</strong>
                  </p>
                )}
              </Form.Group>
            </Form.Group>
          </Form>
        </div>
      </div>
      <Content />
      <div className={styles.content}>
        <Company empresa={company} />
        <Shopkeeper empresa={company} />
      </div>
    </>
  );
}
