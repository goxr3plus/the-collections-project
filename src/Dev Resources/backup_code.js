axiosGamesInstance.get('/3030-' + element.id +'/?api_key=' + GiantBomb_API_KEY + '&format=json&field_list=' + query)
                .then(response => {


                    let tempArr = this.state.giantBombData.slice();
                    tempArr.push(response.data.results);
                    this.setState({giantBombData: tempArr, isLoading: false})        
                })
                .catch(error => {

                        // If error while AJAX request to Giant Bomb api then push to 404 page.
                        // window.location.reload();
                        this.props.history.push('/404');
                        });