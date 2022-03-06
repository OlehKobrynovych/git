// children react доступні у будь-якому компоненті. У них записаний вміст між відкриваючим та 
// закриваючим тегами компонента
<Welcome>
    Привіт, світе!
</Welcome>


// 1.
// file1
const html1 = <h1>asd asd</h1>
<FancyBorder color="blue" color2="blue2" html1={html1} />
<FancyBorder color="blue" color2="blue2" html1={html1}></FancyBorder>
// file2
{props.html1}

// file1
<FancyBorder color="blue" color2="blue2">
    <h1>asd asd</h1>
</FancyBorder>
// file2
{props.children}

// 2. function children react 
// Викликати numTimes разів дочірню функцію зворотнього виклику для створення повторюваних компонентів
function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div>{items}</div>;
  }
  
  function ListOfTenThings() {
    return (
      <Repeat numTimes={10}>
        {(index) => <div key={index}>Це елемент {index} у списку</div>}
      </Repeat>
    );
  }

// -----------------------------------------------------

  function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function WelcomeDialog() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
  
  ReactDOM.render(
    <WelcomeDialog />,
    document.getElementById('root')
  );
