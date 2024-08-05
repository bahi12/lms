import React from 'react';
import NavBar from './NavBar';
import SideBar from './SideBar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <div className="container-fluid" style={{ backgroundColor: 'grey' }}>
<div className="builder-precontainer -position-relative ">
      <div className="card-selection -position-absolute" style="border: 0px; height: 1313px; width: 420px; top: 450.641px; left: 47px;">
      </div>
      <div className="selector -position-absolute" style="top: 317.562px; left: 59px; width: 396px;">
        <div className="name"></div>
      </div>

      <div className="selector selector-click -position-absolute" style="height: 98px; width: 284px; top: -543.516px; left: 255px; border: 1px solid rgb(24, 160, 223);">
      </div>

      <div className="builder-container position-relative show-grid drop-zone mx-5 mt-3 -border-radius -shadow-sm -88vh" onscroll="scrollContent()" data-page="index" show-code-editor="1" show-duplicate-element="1" show-jsx-copy-code="0" autosave-active="1" style=" "><nav className="navbar navbar-expand-lg navbar-dark bg-gradient-dark z-index-3 py-3 ">
    <div className="container">
      <a className="navbar-brand font-weight-bold text-white" href="javascript:;" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        Soft UI PRO
      </a>
      <a href="javascript:;" className="btn btn-sm  bg-gradient-info  btn-round mb-0 ms-auto d-lg-none d-block">Buy Now</a>
      <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon mt-2">
          <span className="navbar-toggler-bar bar1"></span>
          <span className="navbar-toggler-bar bar2"></span>
          <span className="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div className="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0" id="navigation">
        <ul className="navbar-nav navbar-nav-hover mx-auto">
          <li className="nav-item mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="">
              Our Story
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="">
              Solutions
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="">
              About Us
            </a>
          </li>
          <li className="nav-item mx-2">
            <a className="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" href="">
              Contact
            </a>
          </li>
        </ul>
        <ul className="navbar-nav d-lg-block d-none">
          <li className="nav-item">
            <a href="javascript:;" className="btn btn-sm  bg-gradient-info  btn-round mb-0 me-1">Buy Now</a>
          </li>
        </ul>
      </div>
    </div>
  </nav><header className=" mt-4" >
  <div className="page-header min-vh-75">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 my-auto">
          <h1 className="text-gradient text-warning mb-0">Your Desired</h1>
          <h1 className="mb-4">Experiences</h1>
          <p className="lead">The time is now for it to be okay to be great. For being a bright color. For standing out.</p>
          <div className="buttons">
            <button type="button" className="btn bg-gradient-warning mt-4">Discover</button>
            <button type="button" className="btn text-warning shadow-none mt-4">Read more</button>
          </div>
        </div>
        <div className="col-lg-8 ps-5 pe-0">
          <div className="row">
            <div className="col-lg-3 col-6">
              <img className="w-100 border-radius-lg shadow mt-0 mt-lg-7" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/desire.jpg" alt=""></img></img>
            </div>
            <div className="col-lg-3 col-6">
              <img className="w-100 border-radius-lg shadow" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/chair.jpg" alt=""></img>
              <img className="w-100 border-radius-lg shadow mt-4 hoverZoomLink" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/facade.jpg" alt=""></img>
            </div>
            <div className="col-lg-3 col-6">
              <img className="w-100 border-radius-lg shadow mt-0 mt-lg-5 hoverZoomLink" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/architecture.jpg" alt=""></img>
              <img className="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/baloon.jpg" alt=""></img>
            </div>
            <div className="col-lg-3 col-6">
              <img className="w-100 border-radius-lg shadow mt-3 hoverZoomLink" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/seaside.jpg" alt=""></img>
              <img className="w-100 border-radius-lg shadow mt-4" src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/medusa.jpg" alt=""></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</header><section className="py-3 " >
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mx-auto">
        <div className="p-3 text-center mb-5">
          <div className="icon icon-shape icon-lg bg-gradient-primary shadow mx-auto">
            <i className="fas fa-user"></i>
          </div>
          <h2 className="mt-3">Check out what's new</h2>
          <p>We get insulted by others, lose trust for those others. We get back freezes every winter</p>
        </div>
      </div>
    </div>
    <div className="row mb-5">
      <div className="col-lg-4 col-md-6">
        <div className="card card-background align-items-start h-100">
          <div className="full-background" style="background-image: url(https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/beach.jpg)"></div>
          <div className="card-body z-index-3">
            <div className="icon icon-md">
              <svg width="30px" height="30px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>spaceship</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-1720.000000, -592.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g transform="translate(4.000000, 301.000000)">
                        <path d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"></path>
                        <path d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"></path>
                        <path d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z" opacity="0.598539807"></path>
                        <path d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z" id="color-3" opacity="0.598539807"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="card-footer pb-3 pt-2 z-index-3">
            <h4 className="text-white mb-1">Nature's Light</h4>
            <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">450 spots</p>
          </div>
          <span className="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex flex-column">
        <div className="card h-100 card-background align-items-start">
          <div className="full-background" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/indian.jpg')"></div>
          <div className="card-body z-index-3">
            <div className="icon icon-md">
              <svg width="30px" height="30px" viewBox="0 0 44 43" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>megaphone</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                  <g transform="translate(-2168.000000, -591.000000)" fill="#FFFFFF" fill-rule="nonzero">
                    <g transform="translate(1716.000000, 291.000000)">
                      <g id="megaphone" transform="translate(452.000000, 300.000000)">
                        <path d="M35.7958333,0.273166667 C35.2558424,-0.0603712374 34.5817509,-0.0908856664 34.0138333,0.1925 L19.734,7.33333333 L9.16666667,7.33333333 C4.10405646,7.33333333 0,11.4373898 0,16.5 C0,21.5626102 4.10405646,25.6666667 9.16666667,25.6666667 L19.734,25.6666667 L34.0138333,32.8166667 C34.5837412,33.1014624 35.2606401,33.0699651 35.8016385,32.7334768 C36.3426368,32.3969885 36.6701539,31.8037627 36.6666942,31.1666667 L36.6666942,1.83333333 C36.6666942,1.19744715 36.3370375,0.607006911 35.7958333,0.273166667 Z"></path>
                        <path d="M38.5,11 L38.5,22 C41.5375661,22 44,19.5375661 44,16.5 C44,13.4624339 41.5375661,11 38.5,11 Z" opacity="0.601050967"></path>
                        <path d="M18.5936667,29.3333333 L10.6571667,29.3333333 L14.9361667,39.864 C15.7423448,41.6604248 17.8234451,42.4993948 19.6501416,41.764381 C21.4768381,41.0293672 22.3968823,38.982817 21.7341667,37.1286667 L18.5936667,29.3333333 Z" opacity="0.601050967"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="card-footer pb-3 pt-2 z-index-3">
            <h4 className="text-white mb-1">Cultural</h4>
            <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">257 spots</p>
          </div>
          <span className="mask bg-gradient-info border-radius-xl z-index-2 opacity-6"></span>
        </div>
        <div className="card h-100 card-background mt-4 align-items-start">
          <div className="full-background" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/greece.jpg')"></div>
          <div className="card-body z-index-3">
            <div className="icon icon-md">
              <svg width="30px" height="30px" viewBox="0 0 46 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                  <title>customer-support</title>
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                      <g transform="translate(-1717.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero">
                          <g transform="translate(1716.000000, 291.000000)">
                              <g transform="translate(1.000000, 0.000000)">
                                  <path d="M45,0 L26,0 C25.447,0 25,0.447 25,1 L25,20 C25,20.379 25.214,20.725 25.553,20.895 C25.694,20.965 25.848,21 26,21 C26.212,21 26.424,20.933 26.6,20.8 L34.333,15 L45,15 C45.553,15 46,14.553 46,14 L46,1 C46,0.447 45.553,0 45,0 Z" opacity="0.59858631"></path>
                                  <path d="M22.883,32.86 C20.761,32.012 17.324,31 13,31 C8.676,31 5.239,32.012 3.116,32.86 C1.224,33.619 0,35.438 0,37.494 L0,41 C0,41.553 0.447,42 1,42 L25,42 C25.553,42 26,41.553 26,41 L26,37.494 C26,35.438 24.776,33.619 22.883,32.86 Z"></path>
                                  <path d="M13,28 C17.432,28 21,22.529 21,18 C21,13.589 17.411,10 13,10 C8.589,10 5,13.589 5,18 C5,22.529 8.568,28 13,28 Z"></path>
                              </g>
                          </g>
                      </g>
                  </g>
              </svg>
            </div>
          </div>
          <div className="card-footer pb-3 pt-2 z-index-3">
            <h4 className="text-white mb-1">Popularity</h4>
            <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">363 spots</p>
          </div>
          <span className="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 d-flex flex-column">
        <div className="card card-background align-items-start">
          <div className="full-background" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/city.jpg')"></div>
          <div className="card-body z-index-3">
            <div className="icon icon-md">
              <svg width="30px" height="30px" viewBox="0 0 52 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <title>sound-wave</title>
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g transform="translate(-2015.000000, -596.000000)" fill="#FFFFFF" fill-rule="nonzero">
                        <g transform="translate(1716.000000, 291.000000)">
                            <g id="sound-wave" transform="translate(299.000000, 305.000000)">
                                <path d="M15.2941176,30.5882353 C14.6024837,30.5882353 13.9754248,30.1667974 13.7154248,29.5210458 L8.11777778,15.5269281 L6.51189542,17.9366013 C6.19581699,18.4090196 5.66562092,18.6928105 5.09803922,18.6928105 L0,18.6928105 L0,15.2941176 L4.18888889,15.2941176 L7.08287582,10.9522876 C7.43294118,10.4288889 8.03281046,10.1467974 8.67346405,10.2045752 C9.30052288,10.2708497 9.84261438,10.6769935 10.0754248,11.263268 L15.0969935,23.8214379 L22.1696732,1.19294118 C22.3905882,0.482614379 23.0465359,0 23.7908497,0 C23.792549,0 23.792549,0 23.7942484,0 C24.5385621,0.00169934641 25.1962092,0.487712418 25.4154248,1.19973856 L31.2305882,20.1015686 L34.3267974,15.9738562 C34.6462745,15.5456209 35.1509804,15.2941176 35.6862745,15.2941176 L40.7843137,15.2941176 L40.7843137,18.6928105 L36.5359477,18.6928105 L31.9477124,24.8104575 C31.5653595,25.3202614 30.9298039,25.5717647 30.2959477,25.4647059 C29.6671895,25.3542484 29.1522876,24.9005229 28.9636601,24.2904575 L23.7772549,7.43803922 L16.9152941,29.3952941 C16.7011765,30.0818301 16.0792157,30.5593464 15.3603922,30.5865359 C15.3366013,30.5882353 15.3162092,30.5882353 15.2941176,30.5882353 Z"></path>
                                <path d="M26.5098039,34.6666667 C25.8181699,34.6666667 25.1911111,34.2452288 24.9311111,33.5994771 L19.3334641,19.6053595 L17.7275817,22.0150327 C17.4115033,22.487451 16.8813072,22.7712418 16.3137255,22.7712418 L11.2156863,22.7712418 L11.2156863,19.372549 L15.4045752,19.372549 L18.2985621,15.030719 C18.6486275,14.5073203 19.2484967,14.2252288 19.8891503,14.2830065 C20.5162092,14.349281 21.0583007,14.7554248 21.2911111,15.3416993 L26.3126797,27.8998693 L33.3853595,5.27137255 C33.6062745,4.56104575 34.2622222,4.07843137 35.0065359,4.07843137 C35.0082353,4.07843137 35.0082353,4.07843137 35.0099346,4.07843137 C35.7542484,4.08013072 36.4118954,4.56614379 36.6311111,5.27816993 L42.4462745,24.18 L45.5424837,20.0522876 C45.8619608,19.6240523 46.3666667,19.372549 46.9019608,19.372549 L52,19.372549 L52,22.7712418 L47.751634,22.7712418 L43.1633987,28.8888889 C42.7810458,29.3986928 42.1454902,29.6501961 41.511634,29.5431373 C40.8828758,29.4326797 40.3679739,28.9789542 40.1793464,28.3688889 L34.9929412,11.5164706 L28.1309804,33.4737255 C27.9168627,34.1602614 27.294902,34.6377778 26.5760784,34.6649673 C26.5522876,34.6666667 26.5318954,34.6666667 26.5098039,34.6666667 Z" id="Path-Copy" opacity="0.604957217"></path>
                            </g>
                        </g>
                    </g>
                </g>
              </svg>
            </div>
          </div>
          <div className="card-footer pb-3 pt-5 z-index-3">
            <h4 className="text-white mb-1">Modern Life</h4>
            <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">117 spots</p>
          </div>
          <span className="mask bg-gradient-info border-radius-xl z-index-2 opacity-6"></span>
        </div>
        <div className="card card-background mt-4 align-items-start">
          <div className="full-background" style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laught.jpg')"></div>
          <div className="card-body z-index-3">
            <div className="icon icon-md">
              <svg width="30px" height="30px" viewBox="0 0 42 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <title>time-alarm</title>
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2319.000000, -440.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <g transform="translate(1716.000000, 291.000000)">
                                <g id="time-alarm" transform="translate(603.000000, 149.000000)">
                                    <path d="M18.8086957,4.70034783 C15.3814926,0.343541521 9.0713063,-0.410050841 4.7145,3.01715217 C0.357693695,6.44435519 -0.395898667,12.7545415 3.03130435,17.1113478 C5.53738466,10.3360568 11.6337901,5.54042955 18.8086957,4.70034783 L18.8086957,4.70034783 Z" opacity="0.6"></path>
                                    <path d="M38.9686957,17.1113478 C42.3958987,12.7545415 41.6423063,6.44435519 37.2855,3.01715217 C32.9286937,-0.410050841 26.6185074,0.343541521 23.1913043,4.70034783 C30.3662099,5.54042955 36.4626153,10.3360568 38.9686957,17.1113478 Z" opacity="0.6"></path>
                                    <path d="M34.3815652,34.7668696 C40.2057958,27.7073059 39.5440671,17.3375603 32.869743,11.0755718 C26.1954189,4.81358341 15.8045811,4.81358341 9.13025701,11.0755718 C2.45593289,17.3375603 1.79420418,27.7073059 7.61843478,34.7668696 L3.9753913,40.0506522 C3.58549114,40.5871271 3.51710058,41.2928217 3.79673036,41.8941824 C4.07636014,42.4955431 4.66004722,42.8980248 5.32153275,42.9456105 C5.98301828,42.9931963 6.61830436,42.6784048 6.98113043,42.1232609 L10.2744783,37.3434783 C16.5555112,42.3298213 25.4444888,42.3298213 31.7255217,37.3434783 L35.0188696,42.1196087 C35.6014207,42.9211577 36.7169135,43.1118605 37.53266,42.5493622 C38.3484064,41.9868639 38.5667083,40.8764423 38.0246087,40.047 L34.3815652,34.7668696 Z M30.1304348,25.5652174 L21,25.5652174 C20.49574,25.5652174 20.0869565,25.1564339 20.0869565,24.6521739 L20.0869565,15.5217391 C20.0869565,15.0174791 20.49574,14.6086957 21,14.6086957 C21.50426,14.6086957 21.9130435,15.0174791 21.9130435,15.5217391 L21.9130435,23.7391304 L30.1304348,23.7391304 C30.6346948,23.7391304 31.0434783,24.1479139 31.0434783,24.6521739 C31.0434783,25.1564339 30.6346948,25.5652174 30.1304348,25.5652174 Z"></path>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
          </div>
          <div className="card-footer pb-3 pt-2 z-index-3">
            <h4 className="text-white mb-1">Good Vibes</h4>
            <p className="text-white text-xs font-weight-bolder text-uppercase opacity-7">215 spots</p>
          </div>
          <span className="mask bg-gradient-primary border-radius-xl z-index-2 opacity-6"></span>
        </div>
      </div>
    </div>
  </div>
</section><footer className="footer py-5 " >
  <div className="container">
    <div className="row">
      <div className="col-lg-3 mb-5 mb-lg-0">
        <h6 className="text-uppercase mb-2">Soft</h6>
        <p className="mb-4 pb-2">
            The next generation of design systems.
        </p>
        <a href="javascript:;" className="text-secondary me-xl-4 me-3">
          <span className="text-lg fab fa-facebook"></span>
        </a>
        <a href="javascript:;" className="text-secondary me-xl-4 me-3">
          <span className="text-lg fab fa-twitter"></span>
        </a>
        <a href="javascript:;" className="text-secondary me-xl-4 me-3">
          <span className="text-lg fab fa-instagram"></span>
        </a>
        <a href="javascript:;" className="text-secondary me-xl-4 me-3">
          <span className="text-lg fab fa-pinterest"></span>
        </a>
        <a href="javascript:;" className="text-secondary me-xl-4 me-3">
          <span className="text-lg fab fa-github"></span>
        </a>
      </div>
      <div className="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4">
        <h6 className="text-sm">Company</h6>
        <ul className="flex-column ms-n3 nav">
          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:void(0);">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Careers
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Press
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Blog
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-6 mb-md-0 mb-4">
        <h6 className="text-sm">Pages</h6>
        <ul className="flex-column ms-n3 nav">
          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Login
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Register
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Add list
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-6 mb-md-0 mb-4">
        <h6 className="text-sm">Legal</h6>
        <ul className="flex-column ms-n3 nav">
          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Terms
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              About Us
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Team
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Privacy
            </a>
          </li>
        </ul>
      </div>

      <div className="col-md-2 col-6 mb-md-0 mb-4">
        <h6 className="text-sm">Resources</h6>
        <ul className="flex-column ms-n3 nav">
          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Blog
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Service
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Product
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link text-secondary" href="javascript:;">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr className="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1">
    <div className="row">
      <div className="col-8 mx-lg-auto text-lg-center">
        <p className="text-sm text-secondary">
          Copyright © 2022 Soft &amp;  by Creative Tim.
        </p>
      </div>
    </div>
  </div>
</footer></div>
    </div>
        </div>
    );
}

export default Layout;
