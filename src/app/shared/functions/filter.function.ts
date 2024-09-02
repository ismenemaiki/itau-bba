// FUNÇÃO GENERICA PARA FILTRO DE LISTA
export function filterList(list: Array<any>, filters: Array<string>): Array<Object> {
    return list.filter((item) => {
      return (filters.every((filter) =>
        Object.keys(filter).every((key: any) => filter[key] === item[key]))
      );
    });
  }
  