<<<<<<< HEAD
async function getUser(id) {
  try {
    const dbName = await central(id);

    const [dbData, vaultData] = await Promise.all([
      dbs[dbName](id),
      vault(id)
    ]);

    return {
      id: id,
      name: vaultData.name,
      username: dbData.username,
      email: vaultData.email,
      address: {
        street: vaultData.address.street,
        suite: vaultData.address.suite,
        city: vaultData.address.city,
        zipcode: vaultData.address.zipcode,
        geo: {
          lat: vaultData.address.geo.lat,
          lng: vaultData.address.geo.lng
        }
      },
      phone: vaultData.phone,
      website: dbData.website,
      company: {
        name: dbData.company.name,
        catchPhrase: dbData.company.catchPhrase,
        bs: dbData.company.bs
      }
    };
  } catch (error) {
    return Promise.reject(error);
  }
}
=======
async function getUser(id) {
  try {
    const dbName = await central(id);

    const [dbData, vaultData] = await Promise.all([
      dbs[dbName](id),
      vault(id)
    ]);

    return {
      id: id,
      name: vaultData.name,
      username: dbData.username,
      email: vaultData.email,
      address: {
        street: vaultData.address.street,
        suite: vaultData.address.suite,
        city: vaultData.address.city,
        zipcode: vaultData.address.zipcode,
        geo: {
          lat: vaultData.address.geo.lat,
          lng: vaultData.address.geo.lng
        }
      },
      phone: vaultData.phone,
      website: dbData.website,
      company: {
        name: dbData.company.name,
        catchPhrase: dbData.company.catchPhrase,
        bs: dbData.company.bs
      }
    };
  } catch (error) {
    return Promise.reject(error);
  }
}
>>>>>>> 7efb44ca763303bbd3add727886057d6869fbba3
