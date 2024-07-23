import { Button } from 'rizzui';
import { routes } from '@/config/routes';
import PageHeader from '@/app/shared/page-header';
import CreateCategory from '@/app/shared/ecommerce/category/create-category';
import Link from 'next/link';
import { metaObject } from '@/config/site.config';
import { Metadata } from 'next';

type Props = {
  params: { id: string };
};

/**
 * for dynamic metadata
 * @link: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const id = params.id;

  return metaObject(`Edit ${id}`);
}

const pageHeader = {
  title: 'Editar Categoría',
  breadcrumb: [
    {
      href: routes.eCommerce.dashboard,
      name: 'E-Commerce',
    },
    {
      href: routes.eCommerce.categories,
      name: 'Categorías',
    },
    {
      name: 'Editar',
    },
  ],
};

const categoryData = {
  name: 'Model Kit',
  slug: 'modelkit',
  type: 'Gundam',
  parentCategory: 'Figura',
  description: 'Mono genial',
  images: undefined,
};

export default function EditCategoryPage({ params }: any) {
  return (
    <>
      <PageHeader title={pageHeader.title} breadcrumb={pageHeader.breadcrumb}>
        <Link
          href={routes.eCommerce.categories}
          className="mt-4 w-full @lg:mt-0 @lg:w-auto"
        >
          <Button as="span" className="w-full @lg:w-auto" variant="outline">
            Cancelar
          </Button>
        </Link>
      </PageHeader>
      <CreateCategory id={params.id} category={categoryData} />
    </>
  );
}
