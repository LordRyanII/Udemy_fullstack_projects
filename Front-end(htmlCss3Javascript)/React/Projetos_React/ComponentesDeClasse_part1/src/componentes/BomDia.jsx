import { Fragment } from "react";

export default (props) => {
  return (
    <Fragment>
      <h1>Bom dia {props.nome}!</h1>
      <h2>parabéns pelos seus {props.idade} anos</h2>
    </Fragment>
  );
};
