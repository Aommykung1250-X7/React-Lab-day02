// import { useState } from 'react'

// // ต่อจาก RegisterForm.jsx ที่เขียนร่วมกันตอนเช้า (บล็อก 2.5) — มี name/email/age และ validate() พื้นฐานแล้ว
// // TODO B1: เพิ่มฟิลด์ phone เข้า form state (object เดียว — ห้ามแยก useState ทีละฟิลด์)
// // TODO B1: validate phone — ตัวเลข 10 หลัก ขึ้นต้นด้วย 0 เท่านั้น
// // TODO B1: เข้มงวด validate email ขึ้น — ต้องมีตัวอักษรอย่างน้อย 1 ตัวหลัง @ ด้วย ไม่ใช่แค่ includes("@")
// // TODO B2: ปุ่ม submit ตั้ง disabled เมื่อมี error ค้างอยู่ในฟอร์ม
// // TODO B2: กรอกถูกทุกช่องแล้ว submit → แสดงข้อความสำเร็จบนหน้าจอ (ไม่ใช่แค่ console.log)

// function RegisterForm() {
//   const [form, setForm] = useState({ name: "", email: "", age: "", phone: "" })
//   const [errors, setErrors] = useState({})

//   const updateField = (field, value) => {
//     setForm({ ...form, [field]: value })
//     setErrors({ ...errors, [field]: undefined })
//   }

  const validate = () => {
    const newErrors = {}
    if (form.name.trim() === "") newErrors.name = "กรุณากรอกชื่อ"
    if (!form.email.includes("@")) newErrors.email = "อีเมลไม่ถูกต้อง"
    const ageNum = Number(form.age)
    if (form.age === "" || ageNum < 18 || ageNum > 100) {
      newErrors.age = "อายุต้องอยู่ระหว่าง 18–100"
    }
    if (!/^0\d{9}$/.test(form.phone)) {
      newErrors.phone = "เบอร์โทรต้องเป็นตัวเลข 10 หลัก ขึ้นต้นด้วย 0"
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      console.log("สมัครสำเร็จ:", form)
      alert("สมัครสำเร็จ!")
    }
  }

  return (
    <form className="max-w-md mx-auto my-12 p-6 border border-gray-300 rounded-2xl bg-white space-y-3" onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-2 pb-2">สมัครสมาชิก</h2>

      <p className="text-sm text-gray-600">ชื่อ</p>
      <input value={form.name} onChange={e => updateField("name", e.target.value)} placeholder="ชื่อ"
        className={`w-full border rounded-lg px-3 py-2 ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-gray-300`} />
      {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}

      <p className="text-sm text-gray-600">อีเมล</p>
      <input value={form.email} onChange={e => updateField("email", e.target.value)} placeholder="อีเมล"
        className={`w-full border rounded-lg px-3 py-2 ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-gray-300`} />
      {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}

      <p className="text-sm text-gray-600">อายุ</p>
      <input value={form.age} onChange={e => updateField("age", e.target.value)} placeholder="อายุ"
        className={`w-full border rounded-lg px-3 py-2 ${errors.age ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-gray-300`} />
      {errors.age && <p className="text-red-600 text-sm">{errors.age}</p>}

      <p className="text-sm text-gray-600">เบอร์โทรศัพท์</p>
      <input value={form.phone} onChange={e => updateField("phone", e.target.value)} placeholder="เบอร์โทร"
        className={`w-full border rounded-lg px-3 py-2 ${errors.phone ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-gray-300`} />
      {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}

      <button type="submit" className="w-full py-2 rounded-lg bg-gray-300 text-gray-500 font-bold hover:bg-gray-400 hover:text-gray-700 ">
        สมัคร
      </button>
    </form>
  )
}

// export default RegisterForm
