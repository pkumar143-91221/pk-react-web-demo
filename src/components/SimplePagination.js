import React from 'react';
import { Table, Pagination } from 'react-bootstrap';
import ButtonClick from './ButtonClick';
import ClickCount from './ClickCount';

class SimplePagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            usersToBeShown: [],
            currentPage: 1
        }
    };

    componentDidMount() {
        fetch('users.json')
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                this.setState({
                    users: data,
                    pageSize: 3,
                    usersToBeShown: [],
                    pageArray: []
                });
                this.calculatePaginationDetails(1)
        });
    }

    calculatePaginationDetails = (page) => {
        console.log(page)
        let users = this.state.users;
        let total = users.length;
        let pages = Math.floor((users.length / this.state.pageSize) + 1);
        let firstPage = 1;
        let lastPage = pages;
        let pageArray = []
        let usersToBeShown = []
        let currentPage = 1;
        if(page.toString().toLowerCase().indexOf('previous') > 0) {
            currentPage = this.state.currentPage - 1;
            if(currentPage < 1) {
                currentPage = 1
            }
        } else if(page.toString().toLowerCase().indexOf('next') > 0) {
            currentPage = this.state.currentPage + 1;
            if(currentPage > pages) {
                currentPage = pages;
            }
        } else if(page.toString().toLowerCase().indexOf('first') > 0) {
            currentPage = 1
        } else if(page.toString().toLowerCase().indexOf('last') > 0) {
            currentPage = pages;
        } else {
            currentPage = parseInt(page);
        }
        console.log(parseInt(page))
        console.log(currentPage)
        for(let i = currentPage; i <= currentPage + 4; i++) {
            if(i <= pages)
            pageArray.push(i)
        }
        let currentItemIndex = (currentPage - 1) * this.state.pageSize;
        for(let i = currentItemIndex; i < currentItemIndex + 3 && i <= (total - 1); i++) {
            usersToBeShown.push(users[i])
        }
        let updatedState = {
            usersToBeShown: usersToBeShown,
            pageArray: pageArray,
            firstPage: firstPage,
            lastPage: lastPage,
            currentPage: currentPage
        }
        console.log(updatedState)
        this.setState({
            usersToBeShown: usersToBeShown,
            pageArray: pageArray,
            firstPage: firstPage,
            lastPage: lastPage,
            currentPage: currentPage
        });
    }

    handlePagination = (e) => {
        e.preventDefault();
        console.log(e.target);
        if(e.target.text != undefined) {
            this.calculatePaginationDetails(e.target.text);
        }
    }

     render() {
        return (
            <>
                <Table bordered hover striped>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>{
                    this.state.usersToBeShown && this.state.usersToBeShown.length &&
                    this.state.usersToBeShown.map(
                        (item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.name.toLowerCase()}.example@tutorialspoint.com</td>
                            </tr>
                        )
                    )
                    }
                    </tbody>
                </Table>
                <Pagination>
                    <Pagination.First onClick={(e) => this.handlePagination(e)} />
                    <Pagination.Prev onClick={(e) => this.handlePagination(e)} />{
                    this.state.pageArray && this.state.pageArray.length &&
                    this.state.pageArray.map(
                        (item) => (
                            <Pagination.Item key={item} onClick={(e) => this.handlePagination(e)}
                            active={this.state.currentPage == item}>{item}</Pagination.Item>
                        )
                    )
                    }
                    <Pagination.Next onClick={(e) => this.handlePagination(e)} />
                    <Pagination.Last onClick={(e) => this.handlePagination(e)} />
                </Pagination>
                <br />
                <br />
                <ButtonClick /> <br /><br /><hr />
                <ClickCount />
            </>
        );
    }
}
export default SimplePagination;