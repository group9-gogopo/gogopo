import React, { Component } from "react";
import { StyledPag } from "./StyledPag";

class Pagination extends Component {

  handlerKeyDown = (e) => {
    let page = Math.ceil(this.props.pageLength / 4);
    if (e.keyCode !== 13) return;
    let inputCode = Number(document.querySelector(".pageInput").value);
    document.querySelector(".pageInput").value = "";
    if (isNaN(inputCode)) return;
    if (inputCode > page || inputCode < 1) return;
    this.props.setPage(inputCode);
    this.props.getData(this.props.search,inputCode)
  };

  backPageHandler = () => {
    if (this.props.paginPage === 1) return;
    this.props.backPage();
    this.props.getData(this.props.search,this.props.paginPage-1)
  };

  nextPageHandler = () => {
    let page = Math.ceil(this.props.pageLength / 4);
    if (this.props.paginPage === page) return;
    this.props.nextPage();
    this.props.getData(this.props.search,this.props.paginPage+1)
  };
  handlerClick=(num)=>{
    return()=>{
      this.props.clickPage(num)
      this.props.getData(this.props.search,num)
    }
  }
  render() {
    let page = Math.ceil(this.props.pageLength / 4);
    let pageOldArr = [];
    for (let i = 1; i < page + 1; i++) {
      pageOldArr.push({
        id: i,
        pageNum: i,
      });
    }
    let pageNewArr=[]
    if(page<8){
      pageNewArr=pageOldArr
      
    }else {
      if(this.props.paginPage<5){
        pageNewArr=pageOldArr.splice(0,7)
      }else if(this.props.paginPage<page-2){
        pageNewArr=pageOldArr.splice(this.props.paginPage-4,7)
      }else{
        pageNewArr=pageOldArr.slice(-7)
      }
    }
    return (
      <StyledPag>
        <div className="StProBoBox">
          <div onClick={this.backPageHandler}>上一页</div>
          <div>
            {pageNewArr.map((i) => {
              return (<span 
                key={i.id} 
                className={this.props.paginPage===i.id?'active':''}
                onClick={this.handlerClick(i.id)}
                >
                  {i.pageNum}
              </span>);
            })}
          </div>
          <div onClick={this.nextPageHandler}>下一页</div>
          <div>
            <span>第</span>
            <input
              className="pageInput"
              type="text"
              onKeyDown={this.handlerKeyDown}
            />
            <span>页</span>
          </div>
          <div>共{page}页</div>
        </div>
      </StyledPag>
    );
  }
}

export default Pagination;
