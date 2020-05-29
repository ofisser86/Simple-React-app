import React, { Component } from 'react'


class Article extends Component {
    // constructor(props){
    //     super(props)

    //     this.state = {
    //         isOpen: true

    //     }
    //        this.handleClick = handleClick.bind(this)

    // }
    // Experimental syntax
    state = {

        isOpen: this.props.defaultOpen,
        count: 0
    }

    shouldComponentUpdate(nextProps, nextState){
        return this.state.isOpen !== nextState.isOpen


    }
    componentWillMount(){
        console.log("---", 'mounting')

    }

    componentWillReceiveProps(nextProps){
        console.log("---", 'will recieve')
        if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState(
            {
                isOpen:nextProps.defaultOpen
            }
        )
    }

    componentWillUpdate(){
        console.log("---", 'will update')
    }

    render() {
        const { article } = this.props
        console.log('---', this.props)
        const body = this.state.isOpen && <section className="card-text">{article.text}</section>
        return (
            <div className="card mx-auto"  style={{width:'75%'}}>
                <div className="card-header">
                    <h2 onClick={this.incrementCounter}>
                        {article.title}
                        clicked {this.state.count}
                        <button className="btn btn-primary btn-lg float-right" onClick={this.handleClick}>
                            {this.state.isOpen ? 'close' : 'open'}
                        </button>
                    </h2>
                </div>
                <div className="card-body">
                    <h6 className="card-subtitle text-muted">
                        Creation date {(new Date(article.date)).toDateString()}
                    </h6>
                    
                    {body}

                </div>
            </div>
        )


    }
    handleClick = () => {
        console.log('----', 'cliked')
        this.setState({
            isOpen: !this.state.isOpen

        })
        }

        incrementCounter = () => {
            this.setState({
                count: this.state.count + 1
            })
        }
    //===================Basic React component with restrict functionality=====================
    // function Article(props){
    //     const {article} = props
    //     const foo = props.foo
    //     console.log('---', props)
    //     const body = <section>{article.text}</section>
    //     return (
    //         <div>
    //         <h2>
    //             {article.title}
    //             <button onClick={handleClick}>close</button>    
    //         </h2>
    //         {body}
    //         <p>Date is { (new Date(article.date)).toDateString() } </p>
    //     <p>{foo}</p>

    //         </div>
    //     )
    //     }

    //=======Old syntax======
    // function handleClick() {
    //     console.log('----', 'cliked')

    // }
}
export default Article