

export default function InventoryEditRadios({stockStatus, setStockStatus}){ 

    if (stockStatus === true){ 
        return (
            <>
        <div className="edit-inventory__form__bottom--status--radios">
        <div className="edit-inventory__form__bottom--status--radios--input">
          <label className="edit-inventory__form__label--status instock">
            <input
              type="radio"
              id="inStock"
              name="itemStatus"
              value="In Stock"
              className="edit-inventory__form__bottom--status--radios--buttons"
              defaultChecked={stockStatus === true}
              onClick={() => setStockStatus(true)}
            />
            In stock
          </label>
        </div>
        <div className="edit-inventory__form__bottom--status--radios--input">
          <label
            
            className="edit-inventory__form__label--status outofstock"
          >
            <input
              type="radio"
              id="outOfStock"
              name="itemStatus"
              value="Out of Stock"
              className="edit-inventory__form__bottom--status--radios--buttons"
              onClick={() => setStockStatus(false)}
            />
            Out of stock
          </label>
        </div>
      </div>
      </>
        )
    }
    else if (stockStatus === false){ 
        return (
            <>
        <div className="edit-inventory__form__bottom--status--radios">
        <div className="edit-inventory__form__bottom--status--radios--input">
          <label className="edit-inventory__form__label--status instock">
            <input
              type="radio"
              id="inStock"
              name="itemStatus"
              value="In Stock"
              className="edit-inventory__form__bottom--status--radios--buttons"
              onClick={() => setStockStatus(true)}
            />
            In stock
          </label>
        </div>
        <div className="edit-inventory__form__bottom--status--radios--input">
          <label
            
            className="edit-inventory__form__label--status outofstock"
          >
            <input
              type="radio"
              id="outOfStock"
              name="itemStatus"
              value="Out of Stock"
              className="edit-inventory__form__bottom--status--radios--buttons"
              defaultChecked={stockStatus === true}
              onClick={() => setStockStatus(false)}
            />
            Out of stock
          </label>
        </div>
      </div>
      </>
        )

    }


}