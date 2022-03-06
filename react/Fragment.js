Компонент React.Fragment доволяє вам повертати множину елементів у методі render()
 без створення додаткового DOM елемента:

 render() {
    return (
      <React.Fragment>        // Крім того, ви можете використовувати скорочений синтаксис <> </>
        Some text.
        <h2>A heading</h2>
      </React.Fragment>
    );
  }



<React.Fragment key={el.id}>
    {/* //... */}
</React.Fragment>



//
function Glossary(props) {
    return (
      <dl>
        {props.items.map(item => (
          <React.Fragment key={item.id}> // Без атрибута `key`, React видасть попередження про його відсутність
            <dt>{item.term}</dt>
            <dd>{item.description}</dd>
          </React.Fragment>
        ))}
      </dl>
    );
}