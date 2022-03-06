
//
{arr.length > 0 ? 'asd' : 'asd2'}

{arr.length > 0 && 'asd'}  // виконається asd якщо arr.length > 0 true




// map()
<ul>
    { ['asd', 'asd2', 'asd3'].map((el, index) => <li key={index}>{el}</li>) }
</ul>

//
function Blog(props) {
    const sidebar = (
      <ul>
        {props.posts.map((post) =>
          <li key={post.id}>
            {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}
        <hr />
        {content}
      </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Привіт, світе', content: 'Ласкаво просимо до вивчення React!'},
    {id: 2, title: 'Установка', content: 'React можна встановити через npm.'}
  ];

  ReactDOM.render(
    <Blog posts={posts} />,
    document.getElementById('root')
  );
