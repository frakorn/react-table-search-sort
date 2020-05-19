import React from 'react';
import './list.scss';
import Header from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSearch } from '@fortawesome/free-solid-svg-icons'
import organizationsObj from './organizations.json'

let sortingAsc = true;
let organizations = organizationsObj.organizations;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { organizations: [] }
  }

  sortList() {
    let organizationsSorted;
    if (this.sortingAsc) {
      organizationsSorted = this.state.organizations.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? -1 : 1)
    } else {
      organizationsSorted = this.state.organizations.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
    }
    this.setState({ organizations: organizationsSorted })
    this.sortingAsc = !this.sortingAsc;
  }

  componentWillMount = () => {
    this.setState({ organizations: organizations });
  }

  filterList = (e) => {
    const updatedList = organizations.filter(item => {
      return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
    });
    this.setState({ organizations: updatedList });
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-12 mx-auto bg-white rounded shadow">
              <div role="group" className="input-group mt-3 mb-3 input-group-sm col-3">
                <input onChange={this.filterList.bind(this)} type="text" placeholder="Search" className="form-control" />
                <div className="input-group-append">
                  <div className="input-group-text"><button type="button" disabled="disabled" className="btn p-0 btn-link btn-sm disabled"><FontAwesomeIcon icon={faSearch} /></button>
                  </div>
                </div>
              </div>
              <div className="table-responsive">
                <div className="table table-fixed">
                  <div className="row head">
                    <div className="col-6 col-sm-1">#</div>
                    <div onClick={this.sortList.bind(this)} className="col-6 col-sm-3 name-title">Name <FontAwesomeIcon icon={faSort} /></div>
                    <div className="col-6 col-sm-1">Image</div>
                    <div className="col-6 col-sm-7">Description</div>
                  </div>
                  <div className="body">
                    {this.state.organizations.map((o, i) => (
                      <div className="row" key={i}>
                        <div className="col-6 col-sm-1">{i + 1}</div>
                        <div className="col-6 col-sm-3"><a href={o.homepage_url} target="_blank">{o.name}</a></div>
                        <div className="col-6 col-sm-1"><img className="thumb" src={o.image_url} /></div>
                        <div className="col-6 col-sm-7">{o.short_description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List;
