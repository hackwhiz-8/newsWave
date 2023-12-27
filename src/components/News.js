import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";

// import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'



export class News extends Component {

  static propTypes = {
    category: propTypes.string,
    country: propTypes.string
  }

  constructor() {

    super();

    this.state = {
      articles: [],
      loading: false,
      page: 1,

    }
    
  }

  // it is a life cycle method which  render on browser after the below render function completed  or we can say at last 
  async componentDidMount(props) {
    // this function will print this at last or after the render function 
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=1&pageSize=10`;
    this.setState({ loading: true })
    this.props.setProgress(50);
    let data = await fetch(url);
    let result = await data.json();
    this.props.setProgress(80);
    console.log(result);

    this.setState({
      articles: result.articles,
      totalResults: result.totalResults,
      loading: false,
      page:1,
    })
    this.props.setProgress(100);
    
  }

  handlePrevClick = async () => {
    console.log("prev");

    if (this.state.page - 1 > Math.ceil(this.state.totalResults / 10)) {

    } else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page - 1}&pageSize=10`;
      this.setState({ loading: true })
      // this is immutable thats why it cannot be changed directly
      let data = await fetch(url);
      let result = await data.json();
      console.log(result);

      this.setState({
        page: this.state.page - 1,
        articles: result.articles,
        loading: false
      })
    }
  }

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults) / 10) {

    } else {

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}2&page=${this.state.page + 1}&pageSize=10`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let result = await data.json();
      console.log(result);

      this.setState({
        page: this.state.page + 1,
        articles: result.articles,
        loading: false
      })
    }
  }

  fetchMoreData = async () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    
      this.setState({
       page: this.state.page + 1});

      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.API_KEY}&page=${this.state.page}&pageSize=10`;
      this.setState({ loading: true })
      let data = await fetch(url);
      let result = await data.json();
      console.log(result);
  
      this.setState({
        articles: this.state.articles.concat(result.articles),
        totalResults: result.totalResults,
        loading: false,
        
      })
      

 
  };

  render() {
    return (
      <div className='my-3'>



        <div className='container my-3 h-{{"100px"}} '>
          <h2>NewsMonkey-A News App</h2>
          {/* {this.state.loading && <Spinner />} */}
          <div className='row'>
            {/* this removed bcoz infinite scoll is added */}
            {/* { this.state.articles && this.state.articles.map((ele) => { */}

            {/* infinite scroll effect */}

            <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length !== this.state.totalResults}
              loader={<Spinner />}
            >
              <div className='container'>
                <div className='row'>

                  {this.state.articles.map((ele) => {
                    return <div className='col-md-3' key={ele.url} >
                      <NewsItem title={ele.title ? ele.title.slice(0, 45) : ""}
                        description={ele.description ? ele.description.slice(0, 88) : ""}
                        image={ele.urlToImage} newsUrl={ele.url} />
                    </div>
                  })}
                </div>
              </div>


            </InfiniteScroll>

          </div>

        </div>
        {/* <div className='container d-flex justify-content-between'>
          <button disabled={this.state.page - 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-primary" onClick={this.handlePrevClick}>&larr; previous</button>
          <button disabled={this.state.page - 1 > Math.ceil(this.state.totalResults / 20)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>next &rarr; </button>
        </div> */}

      </div>
    )
  }
}

export default News
