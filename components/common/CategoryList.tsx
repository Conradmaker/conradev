import { categoryQ } from 'modules/query/category';
import Link from 'next/link';
import React from 'react';
import { CategoryListCT } from './styles';

export default function CategoryList() {
  const { data } = categoryQ.getCategoryList();
  return (
    <CategoryListCT className="category_list">
      <ul className="inner">
        {data?.map((category, idx) => (
          <li key={category.id + ',' + idx}>
            <Link title={category.name} href={`/category/${category.slug}`}>
              <strong>{category.name}</strong>
              <small>{category.count || 0}</small>
            </Link>
          </li>
        ))}
      </ul>
    </CategoryListCT>
  );
}
