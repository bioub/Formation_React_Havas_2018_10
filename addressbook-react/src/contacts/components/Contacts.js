import React, { PureComponent } from 'react'
import { Link, Route, Switch } from 'react-router-dom';
import { selectContactsItems, selectContactsLoading } from '../selectors';
import ContactAdd from './ContactsAdd';
import ContactShow from './ContactsShow';
import { connect } from 'react-redux';
import { fetchContacts } from '../actions';
import css from './Contacts.module.css';

class Contacts extends PureComponent {

  /* mieux pour IE11 car build plus léger
  sinon await -> yield -> boucles imbriquées (via regenerator)
  componentDidMount() {
    // TODO axios dans un fichier service
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res.data);
    });
  }
  */

  /* ES2017
  async componentDidMount() {
    // TODO axios dans un fichier service
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(res.data);
  }
  */

  componentDidMount() {
    this.props.dispatch(fetchContacts());
  }

  render() {
    const contacts = this.props.contacts.map((u) => <Link key={u.id} to={this.props.match.path + '/' + u.id}>{u.name}</Link>);

    return (
      <div className={css.Contacts}>
        <div className={css.List}>
          {contacts}
        </div>

        <Switch>
          <Route path={this.props.match.path + '/add'} component={ContactAdd} />
          <Route path={this.props.match.path + '/:id'} component={ContactShow} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  loading: selectContactsLoading(state),
  contacts: selectContactsItems(state),
});

export default connect(mapStateToProps)(Contacts);