<template>
    

  <div class="container my-2">
      <!--Carousel Wrapper-->
      <div id="multi-item-example" class="carousel slide carousel-multi-item">
        <!--Slides-->
        <div class="carousel-inner" role="listbox">
          <!--First slide-->
          <div class="carousel-item active">
            <div>
              <img
                class="card-img-top img-fluid d-block mx-auto"
                :src="getImgUrl(slides[0].image)"
                alt="Card image cap"
              />
            </div>

            <div class="row">
              <div class="col-md-4">
                <div class="mb-3">

                </div>
                <div class="card mb-2 mt-5">
                  <div class="card-body">
                    <h4 class="card-title">{{slides[0].title}}</h4>

                    <p style="white-space:pre-line;" class="card-text mt-n3">{{slides[0].texto1}}</p>
                    <p
                      style="white-space:pre-line;"
                      class="card-text collapse show0"
                    >{{slides[0].texto2}}</p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="collapse"
                      data-target=".show0"
                      @click="leerMas0=!leerMas0"
                    >
                      <span v-if="leerMas0">Leggere&nbsp; -</span>
                      <span v-else>Leggere&nbsp; +</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/.First slide-->

          <!--Second slide-->
          <div class="carousel-item">
            <img
              class="card-img-top img-fluid d-block mx-auto"
              :src="getImgUrl(slides[1].image)"
              alt="Card image cap"
            />
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2 mt-5">
                  <div class="card-body">
                    <h4 class="card-title">{{slides[1].title}}</h4>
                    <p style="white-space:pre-line;" class="card-text mt-n3">{{slides[1].texto1}}</p>
                    <p
                      style="white-space:pre-line;"
                      class="card-text collapse show1"
                    >{{slides[1].texto2}}</p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="collapse"
                      data-target=".show1"
                      @click="leerMas1=!leerMas1"
                    >
                      <span v-if="leerMas1">Leggere&nbsp; -</span>
                      <span v-else>Leggere&nbsp; +</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/.Second slide-->

          <!--Third slide-->
          <div class="carousel-item">
            <img
              class="card-img-top img-fluid d-block mx-auto"
              :src="getImgUrl(slides[2].image)"
              alt="Card image cap"
            />
            <div class="row">
              <div class="col-md-4">
                <div class="card mb-2 mt-5">
                  <div class="card-body">
                    <h4 class="card-title">{{slides[2].title}}</h4>
                    <p style="white-space:pre-line;" class="card-text mt-n3">{{slides[2].texto1}}</p>
                    <p
                      style="white-space:pre-line;"
                      class="card-text collapse mostrar2"
                    >{{slides[2].texto2}}</p>
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-toggle="collapse"
                      data-target=".mostrar2"
                      @click="leerMas2=!leerMas2"
                    >
                      <span v-if="leerMas2">Leggere&nbsp; -</span>
                      <span v-else>Leggere&nbsp; +</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--/.Third slide-->
        </div>
        <!--/.Slides-->

        <!--Controls-->
                  <a
                    class="carousel-control-prev"
                    href="#multi-item-example"
                    role="button"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                  </a>
                  <a
                    class="carousel-control-next"
                    href="#multi-item-example"
                    role="button"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                  </a>
                  <!--/.Controls-->
      </div>
      <!--/.Carousel Wrapper-->
    </div>
    </template>