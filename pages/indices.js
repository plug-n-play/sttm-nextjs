import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
import raagIndices from '../data/raagIndices';

const sanitizeHash = (...args) => args.map(a => a.replace(/ /gi, '')).join('-');

// TODO:
// const toAngURL = () => '';

const BreadCrumb = () => (
  <h4 className="breadcrumb">
    <Link href="/">
      <a>Home </a>
    </Link>
    › <span className="breadcrumbLast">Indices</span>
  </h4>
);

const SideBar = () => {
  return (
    <>
      {Object.entries(raagIndices).map(
        ([key, { name: granthName, indices }]) => (
          <li key={key}>
            <details>
              <summary>{granthName}</summary>
              <ul>
                {indices.map(({ name }) => (
                  <li key={name}>
                    <a href={`#${sanitizeHash(granthName, name)}`}>{name}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
        )
      )}
    </>
  );
};

const SomeTable = () => {
  return (
    <>
      {Object.entries(raagIndices).map(
        ([key, { name: granthName, /*source,*/ indices }]) => (
          <React.Fragment key={key}>
            <h3 id={granthName}> {granthName}</h3>
            <table>
              <thead>
                <tr>
                  <th> Raag Name </th>
                  <th> Ang Range </th>
                </tr>
              </thead>
              <tbody>
                {/* {indices.map(({ name, pages: [from, to], highlight }) => ( */}
                {indices.map(({ name, pages: [from, to] }) => (
                  <tr id={`${sanitizeHash(granthName, name)}`} key={name}>
                    <td>{name}</td>
                    <td>
                      {/* <Link to={toAngURL({ ang: from, source, highlight })}>
                        {from}
                      </Link>{' '} */}
                      {/* <Link> */}
                      {`${from} `}
                      {/* </Link> */}
                      {/* to <Link to={toAngURL({ ang: to, source })}>{to}</Link> */}
                      to {to}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        )
      )}
    </>
  );
};

const Indices = () => {
  return (
    <Layout>
      <div className="row" id="content-root">
        <BreadCrumb />

        <div id="help">
          <div id="sidebar">
            <ul>
              <SideBar />
            </ul>
          </div>

          <main>
            <SomeTable />
          </main>
        </div>
      </div>
    </Layout>
  );
};

export default Indices;
