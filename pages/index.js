import React from 'react';
import Layout from '../components/Layout';
// import GurmukhiKeyboard from '../components/GurmukhiKeyboard';
import Logo from '../components/Icons/Logo';
import CrossIcon from '../components/Icons/Times';
import KeyboardIcon from '../components/Icons/Keyboard';
import SearchIcon from '../components/Icons/Search';

const Home = () => {
  // const onSubmit = ({ handleSubmit, ...data }) => e => {
  //   e.preventDefault();
  //   handleSubmit();
  //   this.props.history.push(toSearchURL(data));
  // };

  // TODO:
  const displayGurmukhiKeyboard = true;
  const setGurmukhiKeyboardVisibilityAs = () => {};

  return (
    <Layout homepage={true}>
      <div className="row" id="content-root">
        <div className="search-page">
          <form
            className="search-form"
            // action={action}
            // onSubmit={onSubmit({
            //   handleSubmit,
            //   query,
            //   type,
            //   source,
            // })}
          >
            <div className="flex justify-center align-center">
              <div>
                <Logo className="logo-long" />
              </div>
            </div>

            <div id="search-container">
              <input
                autoFocus={true}
                // name={name}
                id="search"
                // type={inputType}
                autoCapitalize="none"
                autoComplete="off"
                autoCorrect="off"
                spellCheck="false"
                required="required"
                // value={query}
                // onChange={handleSearchChange}
                // className={className}
                // placeholder={placeholder}
                // title={title}
                // pattern={pattern}
              />
              <button
                type="button"
                className="clear-search-toggle"
                // onClick={setQueryAs('')}
              >
                <CrossIcon />
              </button>
              <button
                type="button"
                className={`gurmukhi-keyboard-toggle ${
                  displayGurmukhiKeyboard ? 'active' : ''
                }`}
                onClick={setGurmukhiKeyboardVisibilityAs(
                  !displayGurmukhiKeyboard
                )}
              >
                <KeyboardIcon />
              </button>
              <button type="submit">
                <SearchIcon />
              </button>
              {/* <GurmukhiKeyboard
                value={query}
                active={displayGurmukhiKeyboard}
                onKeyClick={newValue => setQueryAs(newValue)()}
                onClose={setGurmukhiKeyboardVisibilityAs(false)}
              /> */}
            </div>

            <div className="search-options">
              <div className="search-option">
                <select
                  name="type"
                  id="search-type"
                  // value={type}
                  // onChange={handleSearchTypeChange}
                >
                  {/* {TYPES.map((children, value) => (
                    <option key={value} value={value}>
                      {children}
                    </option>
                  ))} */}
                </select>
              </div>
              <div className="search-option">
                <select
                  name="source"
                  // value={source}
                  // onChange={handleSearchSourceChange}
                >
                  {/* {Object.entries(SOURCES).map(([value, children]) => (
                    <option key={value} value={value}>
                      {children}
                    </option>
                  ))} */}
                </select>
              </div>
            </div>

            {/* <SehajPaathLink /> */}
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
