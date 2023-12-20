'use client';
import { categoryKeys, categoryListFetcher } from 'src/modules/query/category';
import Link from 'next/link';
import React from 'react';
import { CategoryListCT } from './styles';
import { useQuery } from '@tanstack/react-query';

export default function CategoryList() {
  const { data } = useQuery({
    queryKey: categoryKeys.list({ type: 'all' }),
    queryFn: categoryListFetcher,
  });
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
