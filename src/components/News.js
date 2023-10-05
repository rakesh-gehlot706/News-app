import React, { Component } from "react";
import NewsItem from "./NewsItem";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {    // static prop type(online site)
    country: 'in',
    pageSize: 6,
    category: 'genral',
  }

  static propTypes = {       // prop type(online site)
    country: PropTypes.string,
    pageSize: PropTypes,
    category:PropTypes.string, 
  }


  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "How much do you remember from the 2019 Cricket World Cup?",
      description:
        "The 2023 Cricket World Cup in India begins this week, but how much do you remember from the 2019 tournament in England?",
      url: "http://www.bbc.co.uk/sport/cricket/66853907",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/10F59/production/_131256496_bbc-quiz-2019.jpg",
      publishedAt: "2023-10-02T07:37:17.9335673Z",
      content:
        "England celebrate winning the 2019 Cricket World Cup\r\n<table><tr><th>ICC Men's Cricket World Cup</th></tr>\r\n<tr><td>Host country: India Dates: 5 October - 19 November</td></tr><tr><td>Coverage: Test … [+733 chars]",
    },
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title: "BBC names 2023 Green Sport Award winners",
      description:
        "BBC Sport names its 2023 Green Sport Award winners - including Australia men's cricket captain Pat Cummins and League Two football club Forest Green Rovers.",
      url: "http://www.bbc.co.uk/sport/66845486",
      urlToImage:
        "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/87C6/production/_131285743_eaf0a6b8-9d8b-4235-b97b-059b8ffb60d7.jpg",
      publishedAt: "2023-10-02T05:52:17.3715106Z",
      content:
        "Australia cricket captain Pat Cummins and British athlete Innes FitzGerald are among the winners of this year's BBC Green Sport awards.\r\nNow in their second year, the awards celebrate the athletes, f… [+7579 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }
  async componentDidMount() {
    let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=616c6f9525e043fe8ae38b7b83c5a59d&page=1&pageSize=${this.props.pageSize}`;
    // for news fetching url
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles ,totalResults: parsedData.totalResults });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=616c6f9525e043fe8ae38b7b83c5a59d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");

    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=616c6f9525e043fe8ae38b7b83c5a59d&page=${this.state.page + 1 }&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles,
    });
  }
  };

  render() {
    // console.log("render");
    return (
      <div className="container my-4 p-2 ">
        <h1 className="text-center">
        News Monkey - Top Headlines
        </h1>
        <sppiner/>
      

        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 20) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            id="btn1"
            className="btn btn-secondary"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
          disabled={this.state.page +  1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
            type="button"
            id="btn1"
            className="btn btn-secondary"
            onClick={this.handleNextClick}
          >
            Next &#8594;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
