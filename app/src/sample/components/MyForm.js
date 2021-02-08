import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Form,
  FormGroup,
  Col,
  ControlLabel,
  Button,
  ButtonToolbar,
} from 'react-bootstrap';

const MyForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <Form horizontal onSubmit={handleSubmit}>
      <FormGroup controlId={'name'}>
        <Col componentClass={ControlLabel} sm={2}>お名前</Col>
        <Col sm={5}>
          <Field
            id={'name'}
            name="name"
            component="input"
            type="text"
            placeholder="Name"
            className={'form-control'}
          />
        </Col>
      </FormGroup>
      <FormGroup>
        <Col smOffset={2} sm={5}>
          <ButtonToolbar>
            <Button bsStyle={'primary'} type="submit" disabled={pristine || submitting}>登録</Button>
            <Button type="button" disabled={pristine || submitting} onClick={reset}>クリア</Button>
          </ButtonToolbar>
        </Col>
      </FormGroup>
    </Form>
  );
};

export default reduxForm({
  form: 'myForm',
})(MyForm);