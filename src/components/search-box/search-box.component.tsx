import React, { ChangeEventHandler } from 'react';
import './search-box.styles.css'; 

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;

// import './search-box.styles.css'; // this css is not specific to this file, the whole css is picked up and and compiled as a whole 

// const SearchBox = () =>{
//     return(
//         <div>
//             <input
//             className="search-box"
//             type="search"
//             placeholder={this.props.placeholder}
//             onChange={this.props.onChangeHandler}
//             />
//         </div>
//     );
// }
// export default SearchBox;