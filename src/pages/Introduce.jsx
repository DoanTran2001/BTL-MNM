import React from 'react'

// const news = [
//   {
//     "title": "TTN.N10.vn MÁCH BẠN 4 TIPS GIỮ QUẦN ÁO LUÔN BỀN MÀU",
//     "image": "https://4menshop.com/cache/image/400/images/thumbs/news/-601.jpg",
//     "description": "<div><strong>4 TIPS GIỮ QUẦN ÁO LUÔN BỀN MÀU</strong><p>Việc cho quần Jean vào tủ lạnh sẽ giúp cho chúng không bị bạc màu ngoài ra còn giúp loại bỏ mùi hôi khó chịu mà chúng ta không cần giặt quá nhiều lần. Vì vậy, hạn chế được tình trạng sử dụng quá nhiều chất tẩy, nước giặt hay những loại bột giặt ảnh hưởng trực tiếp đến màu sắc trên Outfit của bạn.</p><img src='https://4menshop.com/cache/image/400/images/thumbs/news/-601.jpg'/><p>1.Cho quần áo vào tủ lạnh Việc cho quần Jean vào tủ lạnh sẽ giúp cho chúng không bị bạc màu ngoài ra còn giúp loại bỏ mùi hôi khó chịu mà chúng ta không cần giặt quá nhiều lần. Vì vậy, hạn chế được tình trạng sử dụng quá nhiều chất tẩy, nước giặt hay những loại bột giặt ảnh hưởng trực tiếp đến màu sắc trên Outfit của bạn.</p><p>2. Dùng nước dừa khô</p><p>3. Tránh phơi quần áo trực tiếp dưới ánh nắng mặt trời</p><p> 4. Mua hàng ở những cửa hàng uy tín chất lượng</p></div>",
//     "sub-desc": "Việc cho quần Jean vào tủ lạnh sẽ giúp cho chúng không bị bạc màu ngoài ra còn giúp loại bỏ mùi hôi khó chịu mà chúng ta không cần giặt quá nhiều lần. Vì vậy, hạn chế được tình trạng sử dụng quá nhiều chất tẩy, nước giặt hay những loại bột giặt ảnh hưởng trực tiếp đến màu sắc trên Outfit của bạn.",
//     "id": "4"
//    }
// ]

function Introduce() {
  return (
    <div className='max-w-[1200px] mx-auto bg-white my-5 py-7'>
      <div className='flex'>
        <div className='w-[75%] pl-3 pr-7'>
          <h1 className='text-[#0a0a0a] font-medium text-2xl mb-4'>
            TTN.N10.vn là địa chỉ mua sắm uy tín, là nơi khách hàng gửi gắm sự chân thành, yêu thương qua từng sản phẩm
            được thiết kế độc đáo , đầy tiện dụng và tràn đầy ý nghĩa.
          </h1>
          <div className='mb-8'>
            <img
              className='rounded-lg shadow-lg'
              src='https://media.coolmate.me/cdn-cgi/image/width=1920,quality=90,format=auto/uploads/December2022/marvelDesktop.jpg'
              alt=''
            />
          </div>
          <div className=''>
            <h3 className='font-medium text-lg mb-3'>TTN.N10.vn có gì đặc biệt?</h3>
            <strong className='mb-2'>✅ Độc - đẹp - đầy đủ</strong>
            <p className='mb-2'>
              TTN.N10.vn.vn hướng tới mục tiêu tìm kiếm và cung cấp các nguồn hàng chất lượng cao, độc đáo, sáng tạo,
              giúp bạn có nhiều lựa chọn trong việc thể hiện tính cách của mình
            </p>
            <p className='mb-2'>
              Mọi sản phẩm đều được chăm chút cập nhật đầy đủ, chuẩn xác, tường tận về hình ảnh, xuất xứ, màu sắc thông
              số kĩ thuật, giá thành và cả những thông tin khuyến mãi siêu hấp dẫn nhất, mới nhất.
            </p>
            <strong className='mb-2'>✅ Giá tốt nhất - uy tín nhất</strong>
            <p>
              Với mỗi sản phẩm, ngoài việc chọn lọc kỹ càng, trình bày chi tiết đầy đủ TTN.N10.vn.vn cũng cung cấp cho
              khách hàng những sản phẩm đa dạng độc đáo với giá tốt nhất kèm những điều kiện áp dụng, khuyến mãi giảm
              giá (nếu có), các đánh giá thực tế của người mua, chế độ hậu mãi, bảo hành… Để khách hàng tiếc kiệm thời
              gian cũng như trải nghiệm mua sắm một cách liền mạch, an toàn và thú vị nhất.
            </p>
            <strong className='mb-2'>✅ Địa chỉ mua sắm trực tuyến thông minh</strong>
            <p className='mb-1'>
              Điểm nổi bật nhất của Vuatienich.vn là mang đến những sản phẩm độc đáo với giá cạnh tranh cùng nhiều chính
              sách ưu đài , chúng tôi cung cấp những thông tin chinh xác để khách hàng có thể dễ dàng đưa ra quyết định
              mua hàng tối ưu nhất mà vẫn tiết kiệm chi phí .
            </p>
          </div>
        </div>
        <div className='w-[25%] pl-7 pr-3'>
          <span>Bài viết liên quan</span>
        </div>
      </div>
    </div>
  )
}

export default Introduce
