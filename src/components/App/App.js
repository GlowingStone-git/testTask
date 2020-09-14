import React, { Component } from 'react';
import './App.css';
import Loader from '../Loader/Loader';
import Table from '../Table/Table';
import RowView from '../RowView/RowView';
import Selector from '../Selector/Selector';
import TableSearch from '../TableSearch/TableSearch';
import _ from 'lodash';
import ReactPaginate from 'react-paginate';

class App extends Component {
  state = {
    isSelected: false,
    isLoading: false,
    data: [],
    search: '',
    sort: 'asc',
    sortField: 'id',
    row: null,
    currentPage: 0,
    pageSize: 50
  }

  async fetchData(url) {
    let response = await fetch(url);
    let data = await response.json();

    this.setState({
      isLoading: false,
      data: _.orderBy(data , this.state.sortField, this.state.sort)
    })

  }

  onSort = sortField => {
    let tempData = this.state.data.slice();
    let sort = this.state.sort === 'asc' ? 'desc' : 'asc';
    let data = _.orderBy(tempData, sortField, sort);

    this.setState ({ data, sort, sortField })
  }
  
  onRowSelect = row => (
    this.setState({row})
  )
  
  onSelect = url => {
    this.setState ({
      isSelected: true,
      isLoading: true
    })
    this.fetchData(url)
  }
  
  pageChangeHandler = ({selected}) => {
    this.setState({currentPage: selected})
  }

  searchHandler = search => {
    this.setState({search, currentPage: 0})
  }

  getFilteredData () {
    const {data, search} = this.state

    if (!search) {
      return data
    }

    return data.filter( item=> {
      return item['firstName'].toLowerCase().includes(search.toLowerCase()) ||
       item['lastName'].toLowerCase().includes(search.toLowerCase()) ||
       item['email'].toLowerCase().includes(search.toLowerCase()) 
      })
  }

  render() {
    const filteredData = this.getFilteredData()
    const pageCount = Math.ceil(filteredData.length / this.state.pageSize)
    const displayData = _.chunk(filteredData, this.state.pageSize)
    [this.state.currentPage]
    
  
    if(!this.state.isSelected) {
      return (
        <div className="container">
          <Selector onSelect={this.onSelect}/>
        </div>
      )
    }
    
    return (
        <div className="container my-5">
          {
            this.state.isLoading ? <Loader /> : 
            <React.Fragment>
              <TableSearch onSearch={this.searchHandler}/>
            
              <Table 
                data={displayData} 
                onSort={this.onSort} 
                sort={this.state.sort}
                sortField={this.state.sortField}
                onRowSelect={this.onRowSelect} 
              />
            </React.Fragment>
          }
          {
            this.state.data.length > this.state.pageSize ?
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.pageChangeHandler}
              containerClassName={'pagination'}
              activeClassName={'active'}
              pageClassName={'page-item'}
              pageLinkClassName={'page-link'}
              previousClassName={'page-item'}
              nextClassName={'page-item'}
              previousLinkClassName={'page-link'}
              nextLinkClassName={'page-link'}
              forcePage={this.state.currentPage}
            /> : null
          }
          {
            this.state.row ? <RowView item={this.state.row} /> : null
          }
        </div>
    )

  } 

}

export default App;
