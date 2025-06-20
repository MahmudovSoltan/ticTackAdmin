import React from 'react'

const UsersTables = ({customers}) => {
  return (
     <div>
      <table className="products-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Ad Soyad</th>
            <th>Telefon</th>
            <th>Ünvan</th>
            <th>Şəkil</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.full_name}</td>
              <td>{item.phone}</td>
              <td>{item.address || "Yoxdur"}</td>
              <td>
                {item.img_url ? (
                  <img
                    src={item.img_url}
                    alt={item.full_name}
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                  />
                ) : (
                  "Şəkil yoxdur"
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UsersTables