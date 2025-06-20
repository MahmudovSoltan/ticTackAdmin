import Button from "../../ui/button"
import '../../pages/Products/css/product.css'
const CampaignsHeader = () => {

  return (
    <div className="products-header">
      <p>Kampaniylar</p>
      <Button title="Əlavə et" className="btn-primary" style={{ width: "89px", height: "40px" }}  />
    </div>
  )
}

export default CampaignsHeader