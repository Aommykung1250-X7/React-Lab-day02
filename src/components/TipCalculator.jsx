import { useState } from 'react'

function TipCalculator() {
  const [bill, setBill] = useState("")
  const [tipPercent, setTipPercent] = useState(10);
  const [people, setPeople] = useState(1)

  // TODO 1: แปลง bill (string) เป็นตัวเลขที่ปลอดภัย (กัน NaN)
  // TODO 2: คำนวณ tip, total, perPerson สดตอน render — ห้ามเป็น useState
  // TODO 3: ปุ่มลัด % ทิป ด้วย .map() (ไม่ใช่เขียนปุ่มแยกทีละอัน)
  // TODO 4: ปุ่มรีเซ็ตคืนค่าทุกช่องพร้อมกัน

  const billNumber = Number(bill);

  return (
    <section className="max-w-md mx-auto my-12 p-6 border rounded-2xl bg-white border-gray-300">
      <h2 className="text-xl font-bold mb-4">คำนวณทิป</h2>
      <div className="mb-4">
        <label htmlFor="bill" className="block mb-1 text-sm text-gray-600 ">ยอดบิล (บาท)</label>
        <input
          type="number"
          id="bill"
          placeholder=""
          className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full border-gray-300"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="tipPercent" className="block mb-1 text-sm text-gray-600">ทิป {tipPercent}%</label>
        <div className="flex space-x-2">
          {[10, 15, 20].map((percent) => (
            <button key={percent}
              className="px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:bg-blue-500 cursor-pointer text-bold focus:text-white"
              onClick={() => setTipPercent(percent)}          
          >
              {percent}%
            </button> 
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="num" className="block mb-1 text-sm text-gray-600">จำนวนคน</label>
        <input
          type="number"
          id="num"
          placeholder="1"
          className="border rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full border-gray-300 "
          value={people}
          onChange={(e) => setPeople(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <div>
          <div className="flex justify-between mb-2">
            <p className="font-sm text-gray-600">ทิป </p>
            <p className="font-sm text-gray-800">{Number((billNumber * tipPercent) / 100).toFixed(2)} บาท</p>
          </div>
          <div className="flex justify-between mb-2">
            <p className="font-sm text-gray-600">ยอดรวม </p>
            <p className="font-sm text-gray-800">{Number(billNumber + (billNumber * tipPercent) / 100).toFixed(2)} บาท</p>
          </div>
            <div className="flex justify-between mb-2">
            <p className="font-semibold ">คนละ </p>
            <p className="font-semibold ">{Number.isFinite((billNumber + (billNumber * tipPercent) / 100) / people) ? Number((billNumber + (billNumber * tipPercent) / 100) / people).toFixed(2) : '0.00'} บาท</p>
          </div>
        </div>
      </div>
      <button
        className="w-full py-2 rounded-lg bg-white text-gray-800 border border-gray-300 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
        onClick={() => {  setBill(""); setTipPercent(10); setPeople(1); }}
      >
        รีเซ็ต
      </button>
    </section>
  )
}

export default TipCalculator;
