/* eslint-disable react/no-danger */
import React from 'react';
import './General.scss';
// import { _ } from '@evershop/evershop/src/lib/locale/translate';

export default function SearchInfo() {
  const [key, setKey] = React.useState('');

  React.useEffect(() => {
    // Get the key from the URL
    const url = new URL(window.location.href);
    const keyParam = url.searchParams.get('keyword');
    setKey(keyParam);
  });

  //            {_(`Search results for "${key}"`, { keyword: key })}
  return (
    <div className="page-width">
      <div className="mb-1 md:mb-2">
        <div className="text-left ">
          <h1 className="search-name mt-25">
            {`Search results for "${key}"`}
          </h1>
        </div>
      </div>
    </div>
  );
}

export const layout = {
  areaId: 'content',
  sortOrder: 5
};
