import logo from './logo.svg';
import './App.css';
import listaUsuarios from './users.js';

function SumarNumerosExpresiones() {
  return <div>{10 + 23}</div>
}

function PresentarValorVariable() {
  let nombre = "Lucho";
  return (<div>{nombre}</div>)
}

function PresentarValorObjeto() {
  let persona = {
    name: "Jose",
    codigo: "123",
    direccion: "Quito, el ejercito"
  }
  return (<div>Nombre: {persona.name}. Direccion: {persona.direccion}. Codigo: {persona.codigo}</div>)
}
function Div() {
  return <div>Hola</div>
}
function EjercicioInput() {
  let persona = {
    name: "Bryan",
    codigo: "456",
    direccion: "Quito, el ejercito"
  }
  return (
    <div>
      <label htmlFor="name">Nombre:</label>
      <input type="text" id="name" name="name" value={persona.name}></input>
      <label htmlFor="codigo">Codigo:</label>
      <input type="text" id="codigo" name="codigo" value={persona.codigo}></input>
      <label htmlFor="direccion">Direccion:</label>
      <input type="text" id="direccion" name="direccion" value={persona.direccion}></input>
    </div>
  )
}

function EjercicioAJsx() {
  return (
    <form>
      <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          ariaDescribedby="emailHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" className="form-text text-muted"
        >We'll never share your email with anyone else.</small
        >
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
      <div className="form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

function EjercicioDosAJsx() {
  return (
    <div>
      <p>Details Form</p>
      <h1 style={{ marfinLeft: "580px", color: "red" }}>Form</h1>
      <form action="#" name="testform">
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          First Name
        </div>
        <input name="first" type="text" /> <br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Last Name
        </div>
        <input name="last" type="text" /> <br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Father's Name
        </div>
        <input name="fname" type="text" /><br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Dob
        </div>
        <input name="dob" type="text" /> <br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Gender
        </div>
        <input name="gender" type="radio" value="0" />male
        <input name="gender" type="radio" value="1" />female<br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Address
        </div>
        <input name="address" type="text" /><br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          State
        </div>
        <select name="dropbox">
          <option value="ap">ap</option>
          <option value="tml">tml</option></select
        ><br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Pincode
        </div>
        <input name="address" type="text" /><br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          EMail
        </div>
        <div><input name="first" type="text" /></div>
        <br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Phone Number
        </div>
        <input name="address" type="text" /><br /><br />
        <div style={{ marfinLeft: "500px", width: "120px", float: "left", color: "red" }}>
          Languages
        </div>
        <input name="telugu" type="checkbox" />telugu
        <input name="hindi" type="checkbox" />hindi
        <input name="english" type="checkbox" />english<br /><br />
        <div>
          <center><button type="submit" value="submit">submit</button></center>
        </div>
      </form>
    </div>
  )
}

var datos = [1, 2, 3, 4, 5];

function VisualizarUnaLista() {
  let elementosHtml = datos.map(item => <li>{item}</li>);
  return <ui>{elementosHtml}</ui>
}


function VisualizarListaParImpares() {

  const estiloPar = { color: "red" };
  const estiloImpar = { color: "blue" };
  let listaColores = datos.map(item =>
    <li key={item} style={item % 2 === 0 ? estiloPar : estiloImpar} >
      {item}
    </li>);
  return <div><ui>{listaColores}</ui></div>
}

function VisualizarUsuarios() {
  // Visualizar los nombres de los usuarios y sus correos en una lista (ul/li)
  let listaUsuariosCorreos = listaUsuarios.map(item =>
    <li key={item.id}>
      {item.name},{<a href={`mailto: ${item.email}`}>{item.email}</a>}
    </li>
  );
  return <div><ui>{listaUsuariosCorreos}</ui></div>
}

function TablaDeUsuarios() {
  let titulo = (
    <tr>
      <th>Nombre</th> <th>Usuario</th> <th>Email</th> <th>Dirección</th>
    </tr>
  );
  let contenido = listaUsuarios.map(item => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.username}</td>
      <td>{<a href={`mailto: ${item.email}`}>{item.email}</a>}</td>
      <td>{`Ciudad: ${item.address.city}, Calle: ${item.address.street}, ${item.address.suite}, Codigo Postal: ${item.address.zipcode}`}</td>
    </tr>
  ));

  return (
    <table class="default" border="1">

      <thead>{titulo}</thead>
      <tbody>{contenido}</tbody>
      <tr>
        <td colspan="3">Total de registros:</td>
        <td>{contenido.length}</td>
      </tr>

    </table>
  )
}

function App() {
  return (
    <div>
      {/* <SumarNumerosExpresiones />
      <PresentarValorVariable />
      <PresentarValorObjeto />
      <Div></Div>
      <EjercicioInput />
      <br />
      <EjercicioAJsx />
      <br />
      <EjercicioDosAJsx /> */}

      {/* <VisualizarUnaLista />
      <VisualizarListaParImpares />
      <VisualizarUsuarios /> */}
      <TablaDeUsuarios />


    </div>

  );
}

export default App;
