<template>
    <section class="hidden md:flex flex-col items-center justify-center">
        <div class="flex justify-between px-[62px] py-[74px] rounded-[20px] bg-[#F9FFF7] gap-[100px] w-fit">
            <!--Logo section-->
            <div class="flex flex-col gap-[21px]">
                <img class="w-[207px] h-[50px]" src="../assets/logo-elemes.png" alt="logo-elemes">
                <p class="text-[#757575] text-justify font-normal text-sm break-all w-[325px]">
                    Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, 
                    Kecamatan Setiabudi, Kota Jakarta Selatan, 
                    Daerah Khusus Ibukota Jakarta 12950
                </p>
                <i class="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8BAC3E" class="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8BAC3E" class="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#8BAC3E" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                    </svg>
                </i>
            </div>
            <!--Categories section-->
            <div>
                <p class="font-medium text-lg mb-[25px]">
                Categories
                </p>
                <p  v-for="(item, index) in categories" :key="index" class="text-[#757575] text-sm font-normal mb-[10px]">{{ item }}</p>
            </div>
            <!--About Us section-->
            <div>
                <p class="font-medium text-lg mb-[25px]">
                About Us
                </p>
                <p  v-for="(item, index) in aboutUs" :key="index" class="text-[#757575] text-sm font-normal mb-[10px]">{{ item }}</p>
            </div>
            <!--Newsletter section-->
            <div>
                <p class="font-medium text-lg mb-[25px]">
                Newsletter
                </p>
                <div class="flex flex-col gap-[18px]">
                    <p  class="text-[#757575] text-sm font-normal  text-justify break-all w-[245px]">
                        Get now free 50% discount for alll products on your first order
                    </p>
                    <div class="border border-solid border-[#000000] rounded text-[#000000] w-[259px]">
                        <input type="text" placeholder="Your Email Address" class="outline-none placeholder:text-[#000000] px-2.5 py-2">
                        <span class="font-medium text-sm px-2.5 py-2 bg-[#8BAC3E] text-white rounded">SEND</span>
                    </div>
                    <div>
                        <i class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8BAC3E" class="w-[15px] h-[15px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                            </svg>
                            <span class="font-normal text-sm not-italic">elemesid@gmail.com</span>
                        </i>
                        <i class="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#8BAC3E" class="w-[15px] h-[15px]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            <span class="font-normal text-sm not-italic">0888 1111 2222</span>
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <p class="text-[#757575] font-normal text-xs my-[48px]">© 2021 ELEMES ID. ALL RIGHTS RESERVED</p>
    </section>
    <section class="md:hidden flex justify-between px-[35px] py-[10px] border border-solid border-[#F8F8F8] text-center items-center justify-center gap-[80px]">
        <div v-for="(item, index) in icons" :key="index" class="">
            <i>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#757575" class="w-[39px] h-[39px]"><path strokeLinecap="round" strokeLinejoin="round" :d="item.icon" /></svg>
            </i>
            <p>{{ item.name }}</p>
        </div>
    </section>
</template>
  
  <script>
      export default {
          name: 'Footer',
          props: {
              
          },
          data() {
            return {
                categories: ['Cupcake', 'Pizza', 'Kebab', 'Salmon', 'Doughnut'],
                aboutUs: ['About Us', 'FAQ', 'Report Problem'],
                icons: [
                    {name: 'Home', icon: "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"},
                    {name: 'Promotion', icon: "M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"},
                    {name: 'Others', icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"},
                ]
            }
          }
      }
  </script>